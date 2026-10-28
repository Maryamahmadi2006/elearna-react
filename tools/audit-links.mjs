// Audits every href in the app:
//  1. internal "#/..." links must match a real route (static list or pattern)
//  2. bare "#" placeholder links are reported for manual review
//  3. external / mailto / tel links are just counted
import fs from 'node:fs';
import path from 'node:path';

// static routes (mirrors App.jsx)
const STATIC = new Set([
  '/', '/home-three', '/course-three', '/pricing-three', '/blog-three',
  '/contact-three', '/about-one', '/about-two', '/team', '/events', '/faq',
  '/career', '/sign-up', '/checkout', '/information/license',
  '/information/style-guide', '/401', '/404', '/log-in', '/style-guide',
]);
// pattern routes: regex matched against the path (mirrors App.jsx)
const PATTERNS = [
  /^\/team-members\/[^/]+$/,
  /^\/events\/[^/]+$/,
  /^\/career\/[^/]+$/,
  /^\/product\/[^/]+$/,
  /^\/blog-posts\/[^/]+$/,
  /^\/category\/[^/]+$/,
  /^\/[^/]+\/course-details$/,
];

const dirs = ['src/pages', 'src/pages/posts', 'src/pages/categories', 'src/pages/products', 'src/components'];
const files = [];
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) if (f.endsWith('.jsx')) files.push(path.join(dir, f));
}

const dead = new Map(); // link -> [files]
const hash = [];        // bare '#' occurrences
const external = new Set();
let total = 0;

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/href="([^"]*)"/g)) {
    total++;
    const href = m[1];
    if (href === '#' || href === '') {
      hash.push(path.basename(file));
      continue;
    }
    // SVG sprite fragments (<use href="#icon-id">) are not navigation
    if (/^#[a-z0-9-]+-[a-z0-9]$/i.test(href)) continue;
    if (href.startsWith('http')) { external.add(href.split('/')[2]); continue; }
    if (/^(mailto:|tel:|\{)/.test(href)) continue;
    if (!href.startsWith('#/')) {
      dead.set(href, [...(dead.get(href) || []), path.basename(file)]);
      continue;
    }
    const route = href.slice(1); // "#/x" -> "/x"
    const ok = STATIC.has(route.split('?')[0]) || PATTERNS.some((p) => p.test(route.split('?')[0]));
    if (!ok) dead.set(route, [...(dead.get(route) || []), path.basename(file)]);
  }
}

console.log(`links scanned: ${total}`);
console.log(`external domains: ${external.size}`);
console.log(`\nUNRESOLVED internal links: ${dead.size}`);
for (const [link, where] of dead) console.log(`  ${link}   <- ${[...new Set(where)].slice(0, 3).join(', ')}`);
console.log(`\nbare '#' placeholders: ${hash.length}`);
for (const [f, n] of Object.entries(hash.reduce((a, f) => ({ ...a, [f]: (a[f] || 0) + 1 }), {})))
  console.log(`  ${f}: ${n}`);
