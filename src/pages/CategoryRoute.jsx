import { useParams, Navigate } from 'react-router-dom';
import { categoryPages } from '../data/categoryPages.js';

/** Maps /category/:slug to the generated category page (or the 404 page). */
export default function CategoryRoute() {
  const { slug } = useParams();
  const Page = categoryPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
