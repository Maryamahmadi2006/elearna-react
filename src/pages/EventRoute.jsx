import { useParams, Navigate } from 'react-router-dom';
import { eventPages } from '../data/eventPages.js';

/** Maps /events/:slug to the generated event page (or the 404 page). */
export default function EventRoute() {
  const { slug } = useParams();
  const Page = eventPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
