// Verifies that every ./assets/img/ reference in the page components
// resolves to a file on disk; reports (and counts) missing ones.
import fs from 'node:fs';
import path from 'node:path';

const dirs = ['src/pages', 'src/pages/products', 'src/pages/posts', 'src/pages/categories', 'src/components'];
const files = [];
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.jsx')) files.push(path.join(dir, f));
  }
}

// Filenames contain spaces, so parse attribute-aware: a local asset ref
// runs until the closing quote, or (in srcSet) until the " 500w" descriptor.
const re = /\.\/assets\/img\/(.+?)(?="| \d[\d.]*[wx])/g;
const missing = new Set();
let refs = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  for (const m of text.matchAll(re)) {
    refs++;
    // srcset candidates percent-encode the spaces in these filenames
    let name = m[1];
    try {
      name = decodeURIComponent(name);
    } catch {
      /* a literal stray '%' — treat the raw text as the name */
    }
    if (!fs.existsSync(path.join('public/assets/img', name))) {
      missing.add(`${path.basename(f)} -> ${name}`);
    }
  }
}
console.log(`asset refs scanned: ${refs}`);
console.log(`missing on disk: ${missing.size}`);
[...missing].slice(0, 20).forEach((x) => console.log('  ' + x));

// A srcset candidate is "url <width descriptor>" — a raw space inside the URL
// makes the browser reject the whole attribute, so spaces must stay encoded.
let badSrcset = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  for (const m of text.matchAll(/srcSet="([^"]*)"/g)) {
    for (const candidate of m[1].split(',')) {
      if (!candidate.trim()) continue;
      if (candidate.trim().split(/\s+/).length > 2) {
        badSrcset++;
        console.log(`  bad srcset in ${path.basename(f)}: ${candidate.trim()}`);
      }
    }
  }
}
console.log(`malformed srcset candidates: ${badSrcset}`);

