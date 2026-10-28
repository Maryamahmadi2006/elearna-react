import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta, DEFAULT_META } from '../data/pageMeta.js';

// The reference publishes one page per template design, so its own titles name
// the variant ("Home Three", "About One"). This build ships a single design per
// category, so the tab, bookmark and link preview show the category instead.
const TITLES = {
  'Elearna - Home Three': 'Elearna - Home',
  'Elearna - Course Three': 'Elearna - Courses',
  'Elearna - Pricing Three': 'Elearna - Pricing',
  'Elearna - Blog Three': 'Elearna - Blogs',
  'Elearna - Contact Three': 'Elearna - Contacts',
  'Elearna - About One': 'Elearna - About',
  'Elearna - About Two': 'Elearna - About',
};

function resolveMeta(pathname, search) {
  if (pageMeta[pathname]) return pageMeta[pathname];

  // detail routes → "type:slug" keys
  let m = pathname.match(/^\/blog-posts\/(.+)$/);
  if (m) return pageMeta[`post:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/category\/(.+)$/);
  if (m) return pageMeta[`category:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/product\/(.+)$/);
  if (m) return pageMeta[`product:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/team-members\/(.+)$/);
  if (m) return pageMeta[`team-member:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/events\/(.+)$/);
  if (m) return pageMeta[`event:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/career\/(.+)$/);
  if (m) return pageMeta[`career:${m[1]}`] || DEFAULT_META;
  m = pathname.match(/^\/([^/]+)\/course-details$/);
  if (m) return pageMeta[`course:${m[1]}`] || DEFAULT_META;

  return DEFAULT_META;
}

/** Keeps document.title and the meta description in sync with the route. */
export default function PageMeta() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname, search);
    document.title = TITLES[meta.title] || meta.title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', meta.description);
  }, [pathname, search]);

  return null;
}
