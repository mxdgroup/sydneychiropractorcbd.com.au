import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the CSV file
const csvPath = path.join(__dirname, '../meta_tags_c27.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');

// Parse CSV content
const lines = csvContent.split('\n');
const headers = lines[0].split(',');

// Extract meta descriptions from CSV
const metaDescriptions = {};

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  // Split by comma, but handle quoted values
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  
  if (values.length >= 4) {
    const address = values[0];
    const statusCode = values[1];
    const status = values[2];
    const metaDescription = values[3];
    
    // Only process successful pages with meta descriptions
    if (statusCode === '200' && metaDescription && metaDescription.trim()) {
      // Extract path from full URL
      const url = new URL(address);
      const pathname = url.pathname;
      
      // Normalize path (ensure it ends with /)
      const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
      
      metaDescriptions[normalizedPath] = metaDescription.trim();
    }
  }
}

// Generate the updated metaData.ts file
const metaDataContent = `// Meta data utility for handling CSV-based meta descriptions and auto-generated keywords

export interface MetaData {
  url: string;
  metaDescription: string;
  canonicalUrl: string;
  metaKeywords: string;
}

// CSV data mapping (from your meta_tags_c27.csv)
const metaDescriptions: Record<string, string> = ${JSON.stringify(metaDescriptions, null, 2)};

// Base keywords for different page types
const baseKeywords = {
  treatment: ['chiropractic treatment', 'sydney cbd', 'chiropractor sydney', 'pain relief', 'chiropractic care'],
  blog: ['chiropractic care', 'sydney chiropractor', 'health tips', 'pain management', 'wellness'],
  service: ['chiropractic services', 'sydney cbd clinic', 'professional care', 'chiropractic adjustment'],
  general: ['chiropractic', 'sydney cbd', 'clinic 27', 'chiropractor', 'health care']
};

// Function to extract keywords from content
export function generateKeywords(content: string, title: string, pageType: 'treatment' | 'blog' | 'service' | 'general' = 'general'): string {
  const base = baseKeywords[pageType];
  
  // Extract words from title and content
  const text = \`\${title} \${content}\`.toLowerCase();
  
  // Common chiropractic and health-related keywords
  const healthKeywords = [
    'back pain', 'neck pain', 'headache', 'migraine', 'posture', 'sciatica', 
    'tmj', 'vertigo', 'scoliosis', 'massage', 'adjustment', 'treatment',
    'sydney', 'cbd', 'clinic', 'chiropractic', 'chiropractor', 'health',
    'wellness', 'pain relief', 'therapy', 'care', 'professional'
  ];
  
  // Find matching keywords in content
  const foundKeywords = healthKeywords.filter(keyword => 
    text.includes(keyword.toLowerCase())
  );
  
  // Combine base keywords with found keywords
  const allKeywords = [...base, ...foundKeywords];
  
  // Remove duplicates and limit to 10 keywords
  const uniqueKeywords = Array.from(new Set(allKeywords)).slice(0, 10);
  
  return uniqueKeywords.join(', ');
}

// Function to get meta data for a page
export function getMetaData(pathname: string, title: string, content: string, pageType: 'treatment' | 'blog' | 'service' | 'general' = 'general'): MetaData {
  const normalizedPath = pathname.endsWith('/') ? pathname : \`\${pathname}/\`;
  
  // Get meta description from CSV data
  const metaDescription = metaDescriptions[normalizedPath] || 
    \`Professional chiropractic care at Clinic 27 in Sydney CBD. \${title}. Book your consultation today.\`;
  
  // Generate canonical URL
  const canonicalUrl = \`https://sydneychiropractorcbd.com.au\${normalizedPath}\`;
  
  // Generate keywords
  const metaKeywords = generateKeywords(content, title, pageType);
  
  return {
    url: normalizedPath,
    metaDescription,
    canonicalUrl,
    metaKeywords
  };
}

// Function to determine page type from URL
export function getPageType(pathname: string): 'treatment' | 'blog' | 'service' | 'general' {
  if (pathname.includes('/treatments/') || pathname.includes('-treatment-')) {
    return 'treatment';
  }
  if (pathname.includes('/blog/') || pathname.includes('/blog-')) {
    return 'blog';
  }
  if (pathname.includes('/workshops/') || pathname.includes('/massage')) {
    return 'service';
  }
  return 'general';
}
`;

// Write the updated metaData.ts file
const outputPath = path.join(__dirname, '../src/utils/metaData.ts');
fs.writeFileSync(outputPath, metaDataContent);

console.log(`✅ Processed ${Object.keys(metaDescriptions).length} meta descriptions from CSV`);
console.log(`✅ Updated metaData.ts with complete CSV data`);
console.log(`📊 Summary:`);
console.log(`   - Total pages with meta descriptions: ${Object.keys(metaDescriptions).length}`);
console.log(`   - Homepage: ${metaDescriptions['/'] ? '✅' : '❌'}`);
console.log(`   - Treatment pages: ${Object.keys(metaDescriptions).filter(p => p.includes('treatment')).length}`);
console.log(`   - Blog pages: ${Object.keys(metaDescriptions).filter(p => p.includes('blog')).length}`); 