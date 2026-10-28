import { useParams, Navigate } from 'react-router-dom';
import { careerPages } from '../data/careerPages.js';

/** Maps /career/:slug to the generated career page (or the 404 page). */
export default function CareerRoute() {
  const { slug } = useParams();
  const Page = careerPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
