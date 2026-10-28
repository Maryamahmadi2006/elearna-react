import { useParams, Navigate } from 'react-router-dom';
import { teamMemberPages } from '../data/teamMemberPages.js';
import TeamMemberLeeSchmitt from './TeamMemberLeeSchmitt.jsx';

/** Maps /team-members/:slug to the generated member page (or the 404 page). */
export default function TeamMemberRoute() {
  const { slug } = useParams();
  if (slug === 'lee-schmitt') return <TeamMemberLeeSchmitt />;
  const Page = teamMemberPages[slug];
  if (!Page) return <Navigate to="/404" replace />;
  return <Page />;
}
