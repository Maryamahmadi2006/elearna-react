import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import HomeThree from './pages/HomeThree.jsx';
import CourseThree from './pages/CourseThree.jsx';
import PricingThree from './pages/PricingThree.jsx';
import BlogThree from './pages/BlogThree.jsx';
import ContactThree from './pages/ContactThree.jsx';
import AboutOne from './pages/AboutOne.jsx';
import AboutTwo from './pages/AboutTwo.jsx';
import Team from './pages/Team.jsx';
import TeamMemberLeeSchmitt from './pages/TeamMemberLeeSchmitt.jsx';
import Events from './pages/Events.jsx';
import Faq from './pages/Faq.jsx';
import Career from './pages/Career.jsx';
import SignUp from './pages/SignUp.jsx';
import Checkout from './pages/Checkout.jsx';
import License from './pages/License.jsx';
import StyleGuide from './pages/StyleGuide.jsx';
import Forbidden from './pages/Forbidden.jsx';
import NotFound from './pages/NotFound.jsx';

// dynamic detail routes (registries map a slug to its generated page)
import CourseDetailsRoute from './pages/CourseDetailsRoute.jsx';
import PostRoute from './pages/PostRoute.jsx';
import CategoryRoute from './pages/CategoryRoute.jsx';
import ProductRoute from './pages/ProductRoute.jsx';
import TeamMemberRoute from './pages/TeamMemberRoute.jsx';
import EventRoute from './pages/EventRoute.jsx';
import CareerRoute from './pages/CareerRoute.jsx';
import Login from './pages/Login.jsx';

import PageMeta from './components/PageMeta.jsx';
import PageEnhance from './components/PageEnhance.jsx';

/**
 * Scrolls to the top on every route change and keeps the placeholder
 * href="#" links the conversion produced from disturbing the hash router.
 */
function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      // placeholder href="#" links (sliders, decorative controls) must not
      // reset the hash router — real controls replace them with handlers
      // (the [data-anchor] in-page scroll lives in PageEnhance)
      const placeholder = event.target.closest?.('a[href="#"]');
      if (placeholder) event.preventDefault();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <PageEnhance />
      <PageMeta />
      <Routes>
        {/* ---- third-variant pages (the assigned scope) ---- */}
        <Route path="/" element={<HomeThree />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/course-three" element={<CourseThree />} />
        <Route path="/pricing-three" element={<PricingThree />} />
        <Route path="/blog-three" element={<BlogThree />} />
        <Route path="/contact-three" element={<ContactThree />} />

        {/* ---- About has no third variant on the reference (404);
                 variants one/two are included so the menu works ---- */}
        <Route path="/about-one" element={<AboutOne />} />
        <Route path="/about-two" element={<AboutTwo />} />

        {/* ---- shared site pages linked from nav / footer ---- */}
        <Route path="/team" element={<Team />} />
        <Route path="/team-members/lee-schmitt" element={<TeamMemberLeeSchmitt />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/career" element={<Career />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/information/license" element={<License />} />
        <Route path="/information/style-guide" element={<StyleGuide />} />
        <Route path="/401" element={<Forbidden />} />

        {/* ---- detail pages ---- */}
        <Route path="/:slug/course-details" element={<CourseDetailsRoute />} />
        <Route path="/blog-posts/:slug" element={<PostRoute />} />
        <Route path="/category/:slug" element={<CategoryRoute />} />
        <Route path="/product/:slug" element={<ProductRoute />} />
        <Route path="/team-members/:slug" element={<TeamMemberRoute />} />
        <Route path="/events/:slug" element={<EventRoute />} />
        <Route path="/career/:slug" element={<CareerRoute />} />
        <Route path="/log-in" element={<Login />} />

        {/* ---- 404 ---- */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
