// SSR smoke test: renders every page component through Vite's JSX pipeline
// and reports render-time crashes. Run:  node tools/ssr-smoke.mjs [filter]
import { createServer } from 'vite';
import { createElement as h } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import fs from 'node:fs';
import path from 'node:path';

const filter = process.argv[2] || '';
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

async function collectPages(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await collectPages(full, out);
    else if (entry.name.endsWith('.jsx')) out.push(full);
  }
  return out;
}

const root = path.resolve('src/pages');
const files = (await collectPages(root)).sort();

let pass = 0;
let fail = 0;
const failures = [];

for (const file of files) {
  const rel = '/' + path.relative(process.cwd(), file).split(path.sep).join('/');
  if (filter && !rel.toLowerCase().includes(filter.toLowerCase())) continue;
  try {
    const mod = await vite.ssrLoadModule(rel);
    const Comp = mod.default;
    if (typeof Comp !== 'function' && typeof Comp !== 'object') {
      throw new Error('default export is not a component');
    }
    // detail routes take a slug prop; give them a dummy
    const props = {};
    if (rel.endsWith('CourseUnavailable.jsx')) props.slug = 'demo-course';
    const html = renderToString(
      h(MemoryRouter, { initialEntries: ['/'] }, h(Comp, props))
    );
    // slug dispatchers render <Navigate> for an unmatched path, which is
    // legitimately empty server-side
    const redirectOnly = rel.endsWith('Route.jsx') || rel.endsWith('Forbidden.jsx');
    if (html == null || (!redirectOnly && html.length < 50)) {
      throw new Error('suspiciously empty output (' + (html || '').length + ' chars)');
    }
    pass++;
    console.log('  ok  ' + rel + '  (' + html.length + ' chars)');
  } catch (err) {
    fail++;
    failures.push([rel, err]);
    console.log('  FAIL ' + rel + '  → ' + err.message);
  }
}

// shared components too
for (const comp of ['components/SiteHeader.jsx', 'components/Footer.jsx']) {
  try {
    const mod = await vite.ssrLoadModule('/src/' + comp);
    const html = renderToString(
      h(MemoryRouter, { initialEntries: ['/'] }, h(mod.default))
    );
    if (!html || html.length < 50) throw new Error('empty output');
    pass++;
    console.log('  ok  /src/' + comp + '  (' + html.length + ' chars)');
  } catch (err) {
    fail++;
    failures.push([comp, err]);
    console.log('  FAIL /src/' + comp + '  → ' + err.message);
  }
}

console.log('\nSSR smoke: ' + pass + ' passed, ' + fail + ' failed');
await vite.close();
if (fail > 0) {
  console.log('\n--- failures ---');
  for (const [file, err] of failures) console.log(file + '\n  ' + (err.stack || err.message).split('\n').slice(0, 6).join('\n  '));
  process.exit(1);
}
process.exit(0);
