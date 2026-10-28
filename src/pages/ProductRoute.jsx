import { useParams, Navigate } from 'react-router-dom';
import { productPages } from '../data/productPages.js';

/** Maps /product/:slug to the generated product page (or the 404 page). */
export default function ProductRoute() {
  const { slug } = useParams();
  const Page = productPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
