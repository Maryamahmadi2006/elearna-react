import { useParams } from 'react-router-dom';
import { coursePages } from '../data/coursePages.js';
import CourseUnavailable from './CourseUnavailable.jsx';

/** Maps /:slug/course-details to the generated page for that course. */
export default function CourseDetailsRoute() {
  const { slug } = useParams();
  const Page = coursePages[slug];
  return Page ? <Page /> : <CourseUnavailable slug={slug} />;
}
