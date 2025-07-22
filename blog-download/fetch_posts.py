import requests
import json
from datetime import datetime
import re
import os
from urllib.parse import urlparse
import html

def download_image(url, filename, thumbnails_dir):
    """Download an image from URL and save it to the thumbnails directory"""
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        filepath = os.path.join(thumbnails_dir, filename)
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        return filename
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return None

def get_image_extension(url):
    """Extract file extension from URL"""
    parsed_url = urlparse(url)
    path = parsed_url.path
    _, ext = os.path.splitext(path)
    return ext if ext else '.jpg'

def html_to_markdown(html_content):
    """Convert HTML content to markdown format - only headings, paragraphs, and lists"""
    if not html_content:
        return ""
    
    # First decode HTML entities
    content = html.unescape(html_content)
    
    # Convert headings (h1-h6 to #-######)
    for i in range(6, 0, -1):  # Start from h6 down to h1
        pattern = rf'<h{i}[^>]*>(.*?)</h{i}>'
        replacement = '#' * i + r' \1'
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE | re.DOTALL)
    
    # Convert paragraphs
    content = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Convert unordered lists
    content = re.sub(r'<ul[^>]*>', '\n', content, flags=re.IGNORECASE)
    content = re.sub(r'</ul>', '\n', content, flags=re.IGNORECASE)
    content = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1\n', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Convert ordered lists
    content = re.sub(r'<ol[^>]*>', '\n', content, flags=re.IGNORECASE)
    content = re.sub(r'</ol>', '\n', content, flags=re.IGNORECASE)
    
    # For ordered lists, we need to track numbers - this is a simplified approach
    ol_counter = 1
    def replace_ol_li(match):
        nonlocal ol_counter
        result = f"{ol_counter}. {match.group(1)}\n"
        ol_counter += 1
        return result
    
    # Reset counter for each ordered list block
    ol_blocks = re.split(r'(<ol[^>]*>.*?</ol>)', content, flags=re.IGNORECASE | re.DOTALL)
    for i, block in enumerate(ol_blocks):
        if re.match(r'<ol[^>]*>', block, re.IGNORECASE):
            ol_counter = 1
            ol_blocks[i] = re.sub(r'<li[^>]*>(.*?)</li>', replace_ol_li, block, flags=re.IGNORECASE | re.DOTALL)
    content = ''.join(ol_blocks)
    
    # Remove any remaining HTML tags (everything else kept as original content but tags removed)
    content = re.sub(r'<[^>]+>', '', content)
    
    # Clean up extra whitespace and line breaks
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)  # Replace multiple line breaks with double
    content = re.sub(r'[ \t]+', ' ', content)  # Replace multiple spaces/tabs with single space
    content = content.strip()
    
    return content

def fetch_and_display_posts():
    # WordPress API endpoint
    api_url = "https://sydneychiropractorcbd.com.au/wp-json/wp/v2/posts?per_page=100"
    
    # Create blogs and thumbnails directories if they don't exist
    blogs_dir = "blogs"
    thumbnails_dir = "thumbnails"
    
    for directory in [blogs_dir, thumbnails_dir]:
        if not os.path.exists(directory):
            os.makedirs(directory)
    
    try:
        # Make request to the API
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        # Parse JSON response
        posts = response.json()
        
        print(f"Found {len(posts)} posts, creating markdown files and downloading images...")
        print("=" * 80)
        
        for i, post in enumerate(posts, 1):
            # Extract basic information
            post_id = post.get('id', 'N/A')
            title = post.get('title', {}).get('rendered', 'No title')
            date = post.get('date', 'N/A')
            slug = post.get('slug', 'N/A')
            status = post.get('status', 'N/A')
            link = post.get('link', 'N/A')
            content = post.get('content', {}).get('rendered', '')
            excerpt = post.get('excerpt', {}).get('rendered', '')
            
            # Decode HTML entities in title
            title = html.unescape(title)
            
            # Find image URL from schema graph
            thumbnail_url = None
            yoast_data = post.get('yoast_head_json', {})
            if yoast_data:
                graph = yoast_data.get('schema', {}).get('@graph', [])
                for item in graph:
                    if item.get('@type') == 'ImageObject':
                        thumbnail_url = item.get('url')
                        break
            
            # Download thumbnail image if URL exists
            thumbnail_filename = None
            if thumbnail_url and thumbnail_url != 'N/A':
                # Create filename from slug and original extension
                img_ext = get_image_extension(thumbnail_url)
                thumbnail_filename = f"{slug}{img_ext}"
                
                # Download the image
                downloaded_filename = download_image(thumbnail_url, thumbnail_filename, thumbnails_dir)
                if downloaded_filename:
                    print(f"Downloaded thumbnail: {downloaded_filename}")
                else:
                    thumbnail_filename = None
            
            # Format date if available
            if date != 'N/A':
                try:
                    date_obj = datetime.fromisoformat(date.replace('Z', '+00:00'))
                    formatted_date = date_obj.strftime('%Y-%m-%d')
                    iso_date = date_obj.isoformat()
                except:
                    formatted_date = date
                    iso_date = date
            else:
                formatted_date = 'N/A'
                iso_date = 'N/A'
            
            # Convert HTML content to markdown
            content_markdown = html_to_markdown(content)
            
            # Convert excerpt to markdown
            excerpt_markdown = html_to_markdown(excerpt)
            
            # Create markdown content with frontmatter
            thumbnail_field = thumbnail_filename if thumbnail_filename else 'N/A'
            markdown_content = f"""---
title: "{title}"
date: {iso_date}
slug: "{slug}"
status: "{status}"
id: {post_id}
link: "{link}"
excerpt: "{excerpt_markdown}"
thumbnail: "{thumbnail_field}"
---

{content_markdown}
"""
            
            # Create filename from slug
            filename = f"{slug}.md"
            if not filename.endswith('.md'):
                filename += '.md'
            
            # Write to file
            filepath = os.path.join(blogs_dir, filename)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            print(f"Created: {filepath}")
            print(f"  Title: {title}")
            print(f"  Date: {formatted_date}")
            print(f"  Slug: {slug}")
            print(f"  Thumbnail: {thumbnail_field}")
            print("-" * 80)
        
        print(f"\nAll {len(posts)} posts saved to /{blogs_dir}/ folder")
        print(f"Images saved to /{thumbnails_dir}/ folder")
        
    except requests.RequestException as e:
        print(f"Error fetching posts: {e}")
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    fetch_and_display_posts() 