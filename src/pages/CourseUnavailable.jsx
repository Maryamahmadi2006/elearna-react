import SiteHeader from '../components/SiteHeader.jsx';
import Footer from '../components/Footer.jsx';

/**
 * Interim placeholder for course slugs the reference site serves as
 * "Access Denied" (membership-gated). The courses cluster replaces this
 * with the shared, data-driven course-details template — see README
 * ("Unavailable reference pages").
 */
export default function CourseUnavailable({ slug }) {
  return (
    <>
      <SiteHeader />
      <section className="section-padding" style={{ minHeight: '40vh' }}>
        <div className="container w-container" style={{ textAlign: 'center', padding: '80px 20px' }}>
          <h2 className="heading-two">Access denied on the reference</h2>
          <p className="paragraph">
            {`The reference site does not publish this page (/${slug}/course-details), so it was rebuilt from the shared course template.`}
          </p>
          <a href="#/course-three" className="button button-yellow w-inline-block">
            <div>Browse all courses</div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
