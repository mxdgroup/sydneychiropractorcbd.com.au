import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://sydneychiropractorcbd.com.au';

export const GET: APIRoute = async () => {
  // Get all collections
  const [blogPosts, treatments, workshops] = await Promise.all([
    getCollection('blog'),
    getCollection('treatments'),
    getCollection('workshops')
  ]);

  // Static pages
  const staticPages = [
    '',
    'about-clinic27',
    'back-pain',
    'blog-overview',
    'book-now',
    'book',
    'clinic27-book-now',
    'contact-us',
    'disc-pain',
    'faq',
    'massage-sydney-cbd-best-massage-sydney',
    'neck-pain',
    'personal-plan',
    'shoulder-pain',
    'spine-pain',
    'treatments',
    'videos',
    'workshops',
    '3-legged-stool',
  ];

  // Build sitemap entries
  const sitemapEntries: Array<{
    url: string;
    lastmod: string;
    changefreq: string;
    priority: number;
  }> = [];

  // Add static pages
  staticPages.forEach((page) => {
    const url = page === '' ? site : `${site}/${page}/`;
    sitemapEntries.push({
      url,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: page === '' ? 1.0 : 0.8,
    });
  });

  // Add blog posts
  blogPosts.forEach((post) => {
    sitemapEntries.push({
      url: `${site}/${post.slug}/`,
      lastmod: post.data.pubDate ? new Date(post.data.pubDate).toISOString() : new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Add treatments
  treatments.forEach((treatment) => {
    sitemapEntries.push({
      url: `${site}/${treatment.slug}/`,
      lastmod: treatment.data.pubDate ? new Date(treatment.data.pubDate).toISOString() : new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Add workshops
  workshops.forEach((workshop) => {
    sitemapEntries.push({
      url: `${site}/workshops/${workshop.slug}/`,
      lastmod: workshop.data.pubDate ? new Date(workshop.data.pubDate).toISOString() : new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

