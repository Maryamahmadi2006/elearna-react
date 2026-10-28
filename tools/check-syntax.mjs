// Parse every page JSX file with esbuild and report ALL syntax errors at once.
import fs from 'node:fs';
import path from 'node:path';
import { transform } from 'esbuild';

const pagesDir = path.resolve('src/pages');
let bad = 0;
let total = 0;
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.jsx')) files.push(p);
  }
}
walk(pagesDir);

for (const file of files) {
  total++;
  const src = fs.readFileSync(file, 'utf8');
  try {
    await transform(src, { loader: 'jsx', jsx: 'transform' });
  } catch (err) {
    bad++;
    const rel = path.relative(pagesDir, file);
    for (const e of err.errors || []) {
      const loc = e.location ? `:${e.location.line}:${e.location.column}` : '';
      console.log(`ERR ${rel}${loc} :: ${e.text}`);
    }
  }
}
console.log(`\nchecked=${total} broken=${bad}`);
