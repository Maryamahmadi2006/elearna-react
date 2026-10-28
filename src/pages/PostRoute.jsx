import { useParams, Navigate } from 'react-router-dom';
import { postPages } from '../data/postPages.js';

/** Maps /blog-posts/:slug to the generated post page (or the 404 page). */
export default function PostRoute() {
  const { slug } = useParams();
  const Page = postPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
