import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

export default function HomeThree() {
  return (
    <>
      <SiteHeader />
  <section className="home-three-hero">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-vflex home-three-hero-main">
        <div className="home-three-big-heading" style={{"opacity":"0","WebkitTransform":"translate3d(-100px, 0px, 0)","MozTransform":"translate3d(-100px, 0px, 0)","MsTransform":"translate3d(-100px, 0px, 0)","transform":"translate3d(-100px, 0px, 0)"}}>
          {"Personal"}
        </div>
        <div className="home-three-big-heading home-three-big-heading-two" style={{"opacity":"0","WebkitTransform":"translate3d(100px, 0px, 0)","MozTransform":"translate3d(100px, 0px, 0)","MsTransform":"translate3d(100px, 0px, 0)","transform":"translate3d(100px, 0px, 0)"}}>
          {"Coach"}
        </div>
        <img className="home-three-hero-image" src="./assets/img/Home Three Hero Man Image.webp" width="694" height="Auto" alt="Home Three Banner Image" sizes="(max-width: 767px) 100vw, 694px" loading="lazy" srcSet="./assets/img/Home%20Three%20Hero%20Man%20Image-p-500.webp 500w, ./assets/img/Home%20Three%20Hero%20Man%20Image-p-800.webp 800w, ./assets/img/Home%20Three%20Hero%20Man%20Image-p-1080.webp 1080w, ./assets/img/Home%20Three%20Hero%20Man%20Image.webp 1388w"  style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}/>
        <div className="w-layout-vflex home-three-hero-text">
          <div className="small-heading">
            {"Online learning"}
          </div>
          <h1 className="heading-one-top-gap text-white" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Digital "}
            <span className="text-yellow">
              {"learning"}
            </span>
            {" empowerment hub"}
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-details">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-hflex home-two-details-main shadow-off">
        <div className="w-layout-hflex home-two-details-box" style={{"opacity":"0"}}>
          <img src="./assets/img/Circle Icon One.svg" loading="lazy" width="45" height="45" alt="Icon" className="details-icon" />
          <div className="w-layout-vflex details-text">
            <div className="heading-four">
              {"150+ online courses"}
            </div>
            <p className="no-margin-bottom" style={{"opacity":"0"}}>
              {"Lorem ipsum dolor sit amet"}
             </p>
          </div>
        </div>
        <div className="w-layout-hflex home-two-details-box" style={{"opacity":"0"}}>
          <img src="./assets/img/Circle Icon Two.svg" loading="lazy" width="45" height="45" alt="Icon" className="details-icon" />
          <div className="w-layout-vflex details-text">
            <div className="heading-four">
              {"Personalized learning"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet"}
            </p>
          </div>
        </div>
        <div className="w-layout-hflex home-two-details-box" style={{"opacity":"0"}}>
          <img src="./assets/img/Circle Icon Three.svg" loading="lazy" width="45" height="45" alt="Icon" className="details-icon" />
          <div className="w-layout-vflex details-text">
            <div className="heading-four">
              {"Lifetime update"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-category">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-vflex home-three-category-text" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
        <div className="small-heading text-dark">
          {"Top Categories"}
        </div>
        <h2 className="home-three-category-heading" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
          {"Discover leading categories"}
        </h2>
        <p className="no-margin-bottom category-description">
          {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
        </p>
      </div>
      <div className="home-three-categories-wrap">
        <div className="category-card-two">
          <img src="./assets/img/Category Image.webp" loading="lazy" width="300" height="368" alt="" sizes="(max-width: 479px) 19vw, (max-width: 767px) 21vw, (max-width: 991px) 22vw, (max-width: 1439px) 23vw, 300px" srcSet="./assets/img/Category%20Image-p-500.webp 500w, ./assets/img/Category%20Image.webp 600w" className="tab-image-full-width" />
          <div className="category-two-cards-content">
            <div className="heading-four text-white category-content-name">
              {"Web design and creative"}
            </div>
          </div>
        </div>
        <div className="category-card-two">
          <img src="./assets/img/Category Image-2.webp" loading="lazy" width="300" height="368" alt="" sizes="(max-width: 479px) 100vw, 300px" srcSet="./assets/img/Category%20Image-2-p-500.webp 500w, ./assets/img/Category%20Image-2.webp 600w" className="tab-image-full-width" />
          <div className="category-two-cards-content">
            <div className="heading-four text-white category-content-name">
              {"Finance and accounting"}
            </div>
          </div>
        </div>
        <div className="category-card-two">
          <img src="./assets/img/Category Image-3.webp" loading="lazy" width="300" height="368" alt="" sizes="(max-width: 479px) 100vw, 300px" srcSet="./assets/img/Category%20Image-3-p-500.webp 500w, ./assets/img/Category%20Image-3.webp 600w" className="tab-image-full-width" />
          <div className="category-two-cards-content">
            <div className="heading-four text-white category-content-name">
              {"Technology and software"}
            </div>
          </div>
        </div>
        <div className="category-card-two">
          <img src="./assets/img/Digital Marketing.webp" loading="lazy" width="300" height="368" alt="Digital Marketing" sizes="(max-width: 479px) 100vw, 300px" srcSet="./assets/img/Digital%20Marketing-p-500.webp 500w, ./assets/img/Digital%20Marketing.webp 600w" className="tab-image-full-width" />
          <div className="category-two-cards-content">
            <div className="heading-four text-white category-content-name">
              {"Digital marketing"}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-potential">
    <div className="w-layout-blockcontainer w-container">
      <div className="w-layout-vflex home-three-potential-text">
        <div className="small-heading text-dark">
          {"Unlocking Potential"}
        </div>
        <div className="heading-three margin-top-fifteen" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
          {"Discover the boundless advantages and transformative power of eLearning for personal and professional growth in the digital age"}
        </div>
      </div>
    </div>
    <div className="home-three-potential-cards-wrap" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
      <div className="potential-cards">
        <div className="heading-three text-blue margin-bottom-ten">
          {"01"}
        </div>
        <div className="heading-four margin-bottom-ten">
          {"Flexibility and convenience"}
        </div>
        <p className="no-margin-bottom">
          {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
        </p>
        <div className="potential-cards-button-wrap button-wrap-one">
          <div className="potential-button">
            <a href="#/contact-three" className="button button-border-off w-inline-block">
              <div>
                {"Get Started "}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="potential-cards">
        <div className="heading-three text-blue margin-bottom-ten">
          {"02"}
        </div>
        <div className="heading-four margin-bottom-ten">
          {"Course accessibility"}
        </div>
        <p className="no-margin-bottom">
          {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
        </p>
        <div className="potential-cards-button-wrap button-wrap-two">
          <div className="potential-button">
            <a href="#/contact-three" className="button button-border-off w-inline-block">
              <div>
                {"Get Started "}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="potential-cards">
        <div className="heading-three text-blue margin-bottom-ten">
          {"03"}
        </div>
        <div className="heading-four margin-bottom-ten">
          {"Cost-effectiveness"}
        </div>
        <p className="no-margin-bottom">
          {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
        </p>
        <div className="potential-cards-button-wrap button-wrap-three">
          <div className="potential-button">
            <a href="#/contact-three" className="button button-border-off w-inline-block">
              <div>
                {"Get Started "}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="potential-cards">
        <div className="heading-three text-blue margin-bottom-ten">
          {"04"}
        </div>
        <div className="heading-four margin-bottom-ten">
          {"Personalized learning"}
        </div>
        <p className="no-margin-bottom">
          {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
        </p>
        <div className="potential-cards-button-wrap button-wrap-four">
          <div className="potential-button">
            <a href="#/contact-three" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} className="button button-border-off w-inline-block">
              <div>
                {"Get Started "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-courses-full">
    <div className="home-three-courses-images-wrapper">
      <img className="course-four-background backgorund-one" src="./assets/img/Course Background.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-p-500.webp 500w, ./assets/img/Course%20Background-p-800.webp 800w, ./assets/img/Course%20Background-p-1080.webp 1080w, ./assets/img/Course%20Background-p-1600.webp 1600w, ./assets/img/Course%20Background-p-2000.webp 2000w, ./assets/img/Course%20Background-p-2600.webp 2600w, ./assets/img/Course%20Background-p-3200.webp 3200w, ./assets/img/Course%20Background.webp 3840w" />
      <img className="course-four-background backgorund-two" src="./assets/img/Course Background-3.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-3-p-500.webp 500w, ./assets/img/Course%20Background-3-p-800.webp 800w, ./assets/img/Course%20Background-3-p-1080.webp 1080w, ./assets/img/Course%20Background-3-p-1600.webp 1600w, ./assets/img/Course%20Background-3-p-2000.webp 2000w, ./assets/img/Course%20Background-3-p-2600.webp 2600w, ./assets/img/Course%20Background-3-p-3200.webp 3200w, ./assets/img/Course%20Background-3.webp 3840w" />
      <img className="course-four-background backgorund-three" src="./assets/img/Course Background-4.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-4-p-500.webp 500w, ./assets/img/Course%20Background-4-p-800.webp 800w, ./assets/img/Course%20Background-4-p-1080.webp 1080w, ./assets/img/Course%20Background-4-p-1600.webp 1600w, ./assets/img/Course%20Background-4-p-2000.webp 2000w, ./assets/img/Course%20Background-4-p-2600.webp 2600w, ./assets/img/Course%20Background-4-p-3200.webp 3200w, ./assets/img/Course%20Background-4.webp 3840w" />
      <img className="course-four-background backgorund-four" src="./assets/img/Course Background-5.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-5-p-500.webp 500w, ./assets/img/Course%20Background-5-p-800.webp 800w, ./assets/img/Course%20Background-5-p-1080.webp 1080w, ./assets/img/Course%20Background-5-p-1600.webp 1600w, ./assets/img/Course%20Background-5-p-2000.webp 2000w, ./assets/img/Course%20Background-5-p-2600.webp 2600w, ./assets/img/Course%20Background-5-p-3200.webp 3200w, ./assets/img/Course%20Background-5.webp 3840w" />
      <img className="course-four-background backgorund-five" src="./assets/img/Course Background-6.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-6-p-500.webp 500w, ./assets/img/Course%20Background-6-p-800.webp 800w, ./assets/img/Course%20Background-6-p-1080.webp 1080w, ./assets/img/Course%20Background-6-p-1600.webp 1600w, ./assets/img/Course%20Background-6-p-2000.webp 2000w, ./assets/img/Course%20Background-6-p-2600.webp 2600w, ./assets/img/Course%20Background-6-p-3200.webp 3200w, ./assets/img/Course%20Background-6.webp 3840w" />
      <img className="course-four-background backgorund-six" src="./assets/img/Course Background-2.webp" width="1920" height="650" alt="Course Background" sizes="(max-width: 1919px) 100vw, 1920px" loading="lazy" srcSet="./assets/img/Course%20Background-2-p-500.webp 500w, ./assets/img/Course%20Background-2-p-800.webp 800w, ./assets/img/Course%20Background-2-p-1080.webp 1080w, ./assets/img/Course%20Background-2-p-1600.webp 1600w, ./assets/img/Course%20Background-2-p-2000.webp 2000w, ./assets/img/Course%20Background-2-p-2600.webp 2600w, ./assets/img/Course%20Background-2-p-3200.webp 3200w, ./assets/img/Course%20Background-2.webp 3840w" />
      <div className="course-four-background-overlay">
      </div>
    </div>
    <div className="home-three-course-content">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-hflex home-three-course-main">
          <div className="w-layout-vflex home-three-course-text">
            <div className="small-heading">
              {"Trending courses"}
            </div>
            <h2 className="no-margin-bottom text-white course-four-heading">
              {"Explore our top programs"}
            </h2>
          </div>
          <div className="course-list-box">
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/building-single-page-applications-with-angular" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Building single page applications with angular"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"5.00 (328)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"6 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"12k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/database-integration-with-mongodb" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Database integration with MongoDB"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"4.49 (756)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"10 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"7k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/operations-management-and-process-improvement" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Operations management and process improvement"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"5.00 (812)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"12 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"23k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/risk-management-and-business-continuity" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Risk management and business continuity"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"4.88 (210)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"3 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"8k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/design-systems-and-pattern-libraries" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Design systems and pattern libraries"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"5.00 (1.2K)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"8 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"25k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="course-four-card w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#/product/full-stack-development-with-the-mern-stack" className="w-inline-block">
                    <div className="heading-four text-white margin-bottom-ten">
                      {"Full-stack development with the MERN stack"}
                    </div>
                    <div className="w-layout-hflex course-details-options">
                      <div className="w-layout-hflex course-four-ratings">
                        <img src="./assets/img/Rating.svg" loading="lazy" alt="" />
                        <div className="small-shot-heading text-light-white">
                          {"5.00 (985)"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Books Small Icons.svg" loading="lazy" width="16" height="16" alt="Icon" />
                        <div className="text-white">
                          {"12 Lessons"}
                        </div>
                      </div>
                      <div className="w-layout-hflex course-four-about">
                        <img src="./assets/img/Person Icons White.svg" loading="lazy" width="13" height="14" alt="Icon" />
                        <div className="text-white">
                          {"22k Enrolled"}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-courses">
    <div className="w-layout-blockcontainer container w-container">
      <div className="small-heading text-dark">
        {"Online learning"}
      </div>
      <div className="heading-three heading-three-gap margin-bottom-thirty" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
        {"Popular courses"}
      </div>
      <div className="tranding-courses-cards tranding-course-bottom-gap">
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image.webp" width="519.5" height="400" alt="Building single page applications with angular" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-p-500.webp 500w, ./assets/img/Course%20Small%20Image-p-800.webp 800w, ./assets/img/Course%20Small%20Image.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Development"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Building single page applications with angular"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"5.00 (328)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"Free"}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up">
                  <div className="heading-five course-name">
                    {"Building single page applications with angular"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"6 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"12k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/building-single-page-applications-with-angular/course-details" className="button button-yellow course-two-button free-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-9.webp" width="519.5" height="400" alt="Database integration with MongoDB" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-9-p-500.webp 500w, ./assets/img/Course%20Small%20Image-9-p-800.webp 800w, ./assets/img/Course%20Small%20Image-9.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Development"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Database integration with MongoDB"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"4.49 (756)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$59 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up course-card-pop-up-two">
                  <div className="heading-five course-name">
                    {"Database integration with MongoDB"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"10 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"7k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/database-integration-with-mongodb/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/database-integration-with-mongodb" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-7.webp" width="519.5" height="400" alt="Risk management and business continuity" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-7-p-500.webp 500w, ./assets/img/Course%20Small%20Image-7-p-800.webp 800w, ./assets/img/Course%20Small%20Image-7.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Management"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Risk management and business continuity"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"4.88 (210)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$49 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up">
                  <div className="heading-five course-name">
                    {"Risk management and business continuity"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"3 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"8k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/risk-management-and-business-continuity/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/risk-management-and-business-continuity" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-5.webp" width="519.5" height="400" alt="Full-stack development with the MERN stack" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-5-p-500.webp 500w, ./assets/img/Course%20Small%20Image-5-p-800.webp 800w, ./assets/img/Course%20Small%20Image-5.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Development"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Full-stack development with the MERN stack"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"5.00 (985)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$72 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up course-popup-last">
                  <div className="heading-five course-name">
                    {"Full-stack development with the MERN stack"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"12 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"22k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/full-stack-development-with-the-mern-stack/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/full-stack-development-with-the-mern-stack" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-8.webp" width="519.5" height="400" alt="Operations management and process improvement" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-8-p-500.webp 500w, ./assets/img/Course%20Small%20Image-8-p-800.webp 800w, ./assets/img/Course%20Small%20Image-8.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Finance"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Operations management and process improvement"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"5.00 (812)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"Free"}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up">
                  <div className="heading-five course-name">
                    {"Operations management and process improvement"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"12 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"23k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/operations-management-and-process-improvement/course-details" className="button button-yellow course-two-button free-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Image.webp" width="519.5" height="400" alt="Course Details" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Image-p-500.webp 500w, ./assets/img/Course%20Image-p-800.webp 800w, ./assets/img/Course%20Image.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Design"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Design systems and pattern libraries"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"5.00 (1.2K)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$99 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up">
                  <div className="heading-five course-name">
                    {"Design systems and pattern libraries"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"8 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"25k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/design-systems-and-pattern-libraries/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/design-systems-and-pattern-libraries" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-2.webp" width="519.5" height="400" alt="" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-2-p-500.webp 500w, ./assets/img/Course%20Small%20Image-2-p-800.webp 800w, ./assets/img/Course%20Small%20Image-2.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Management"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"Grow your brand and reach your audience"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"4.88 (210)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$49 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up">
                  <div className="heading-five course-name">
                    {"Grow your brand and reach your audience"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"10 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"8k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/grow-your-brand-and-reach-your-audience/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/grow-your-brand-and-reach-your-audience" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="card-height-full w-dyn-items">
            <div role="listitem" className="card-height-full w-dyn-item">
              <div className="course-cards-two">
                <div className="course-card-top" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                  <div className="course-overlay">
                  </div>
                  <img className="course-card-two-image" src="./assets/img/Course Small Image-3.webp" width="519.5" height="400" alt="The complete guide to personal and business finance" style={{"width":"100%","opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}} sizes="(max-width: 767px) 100vw, 519.5px" loading="lazy" srcSet="./assets/img/Course%20Small%20Image-3-p-500.webp 500w, ./assets/img/Course%20Small%20Image-3-p-800.webp 800w, ./assets/img/Course%20Small%20Image-3.webp 820w" />
                  <div className="course-image-wrap">
                  </div>
                  <div className="w-layout-vflex course-card-top-description">
                    <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color margin-bottom-ten">
                      {"Finance"}
                    </div>
                    <div style={{"color":"rgb(15,37,42)"}} className="heading-five margin-bottom-twenty">
                      {"The complete guide to personal and business finance"}
                    </div>
                    <div className="w-layout-hflex course-two-card-rating">
                      <img src="./assets/img/Rating.svg" loading="lazy" width="79" height="Auto" alt="" />
                      <div style={{"color":"rgb(123,124,125)"}} className="small-shot-heading small-heading-body-color rating-color">
                        {"4.88 (210)"}
                      </div>
                    </div>
                  </div>
                  <div className="course-price-wrapper course-two-price">
                    <div>
                      {"$99 "}
                    </div>
                  </div>
                </div>
                <div className="course-card-pop-up course-popup-last">
                  <div className="heading-five course-name">
                    {"The complete guide to personal and business finance"}
                  </div>
                  <div className="w-layout-hflex course-card-popup-tags">
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"10 Lessons"}
                    </div>
                    <div className="grey-dot">
                    </div>
                    <div className="small-shot-heading small-heading-body-color">
                      {"8k Enrolled"}
                    </div>
                  </div>
                  <p className="course-card-two-description">
                    {"Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."}
                  </p>
                  <div className="w-layout-vflex course-checkes">
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit amet consectetur"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor"}
                      </div>
                    </div>
                    <div className="w-layout-hflex course-card-checklist">
                      <img src="./assets/img/Tick.svg" loading="lazy" width="12" height="10" alt="Icon" className="margin-top-five" />
                      <div className="course-card-two-description">
                        {"Lorem ipsum dolor sit"}
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-hflex course-cards-two-button">
                    <a href="#/the-complete-guide-to-personal-and-business-finance/course-details" className="button button-yellow course-two-button w-inline-block">
                      <div>
                        {"Course Details"}
                      </div>
                    </a>
                    <a href="#/product/the-complete-guide-to-personal-and-business-finance" className="button button-border-off course-button-two w-inline-block">
                      <div>
                        {"Enroll"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer more-course-text-container w-container" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
        <div className="text-dark">
          {"We assist you in finding the ideal tutor at no cost. "}
          <a href="#/course-three" className="text-dark text-underline hyperlink-text">
            {"Browse all available courses"}
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-counter">
    <div className="w-layout-blockcontainer home-three-counter-container w-container">
      <div className="w-layout-hflex home-three-counter-main">
        <div className="w-layout-vflex home-three-counter-left">
          <div className="heading-three text-white margin-bottom-twenty-five" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Get the courses by expert coach"}
          </div>
          <div className="heading-four text-yellow started-text" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Get started with us"}
          </div>
          <div className="w-layout-hflex home-two-counters-wrap no-margin-bottom" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            <div className="w-layout-vflex home-two-counters">
              <div className="w-layout-hflex counter-box">
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                  </div>
                </div>
                <div className="heading-two text-white">
                  {"."}
                </div>
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                  </div>
                </div>
                <div className="heading-two text-white">
                  {"K"}
                </div>
              </div>
              <div className="small-heading">
                {"Finish seasons"}
              </div>
            </div>
            <div className="counter-border border-white">
            </div>
            <div className="w-layout-vflex home-two-counters">
              <div className="w-layout-hflex counter-box">
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                  </div>
                </div>
                <div className="heading-two text-white">
                  {"."}
                </div>
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"8"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                  </div>
                </div>
                <div className="heading-two text-white">
                  {"K"}
                </div>
              </div>
              <div className="small-heading">
                {"Enrolled"}
              </div>
            </div>
            <div className="counter-border border-white">
            </div>
            <div className="w-layout-vflex home-two-counters">
              <div className="w-layout-hflex counter-box">
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                    <div className="heading-two text-white">
                      {"8"}
                    </div>
                    <div className="heading-two text-white">
                      {"9"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                    <div className="heading-two text-white">
                      {"8"}
                    </div>
                    <div className="heading-two text-white">
                      {"9"}
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex counter-train-wrapper">
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white">
                      {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                    <div className="heading-two text-white">
                      {"8"}
                    </div>
                    <div className="heading-two text-white">
                      {"9"}
                    </div>
                  </div>
                  <div style={{"WebkitTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="w-layout-vflex counter-train">
                    <div className="heading-two text-white" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
                       {"0"}
                    </div>
                    <div className="heading-two text-white">
                      {"1"}
                    </div>
                    <div className="heading-two text-white">
                      {"2"}
                    </div>
                    <div className="heading-two text-white">
                      {"3"}
                    </div>
                    <div className="heading-two text-white">
                      {"4"}
                    </div>
                    <div className="heading-two text-white">
                      {"5"}
                    </div>
                    <div className="heading-two text-white">
                      {"6"}
                    </div>
                    <div className="heading-two text-white">
                      {"7"}
                    </div>
                    <div className="heading-two text-white">
                      {"8"}
                    </div>
                    <div className="heading-two text-white">
                      {"9"}
                    </div>
                  </div>
                </div>
                 <div className="heading-two text-white">
                  {"%"}
                </div>
              </div>
              <div className="small-heading">
                {"Job placement"}
              </div>
            </div>
            <div className="counter-border border-white">
            </div>
          </div>
        </div>
        <div className="home-three-counter-right" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
          <div className="no-margin-bottom w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form">
              <div className="heading-four margin-bottom-twenty-five">
                {"Course availability inquiry"}
              </div>
              <input className="input-field w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your name" type="text" id="Name" required />
              <input className="input-field w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email address" type="email" id="Email" required />
              <textarea placeholder="Message" maxLength="5000" id="field" name="field" data-name="Field" className="textarea w-input">
              </textarea>
              <input type="submit" data-wait="Please wait..." className="button button-border-off w-button" defaultValue={"Inquire"} />
            </form>
            <div className="w-form-done">
              <div>
                {"Thank you! Your submission has been received!"}
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                {"Oops! Something went wrong while submitting the form."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="clients-three">
    <div className="w-layout-blockcontainer container w-container">
      <p className="margin-bottom-twenty-five text-align-center">
        {"Learn from 350+ leading universities and companies with us"}
      </p>
      <div className="w-layout-hflex marquee-main">
        <div className="w-layout-hflex clients-train">
          <img src="./assets/img/Clients Logo.svg" loading="lazy" width="153" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-4.svg" loading="lazy" width="131" height="54" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-6.svg" loading="lazy" width="163" height="52" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-2.svg" loading="lazy" width="98" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-3.svg" loading="lazy" width="66" height="53" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-5.svg" loading="lazy" width="160" height="52" alt="Clients Logo" className="clients-logo" />
        </div>
        <div className="w-layout-hflex clients-train">
          <img src="./assets/img/Clients Logo.svg" loading="lazy" width="153" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-4.svg" loading="lazy" width="131" height="54" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-6.svg" loading="lazy" width="163" height="52" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-2.svg" loading="lazy" width="98" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-3.svg" loading="lazy" width="66" height="53" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-5.svg" loading="lazy" width="160" height="52" alt="Clients Logo" className="clients-logo" />
        </div>
        <div className="w-layout-hflex clients-train">
          <img src="./assets/img/Clients Logo.svg" loading="lazy" width="153" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-4.svg" loading="lazy" width="131" height="54" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-6.svg" loading="lazy" width="163" height="52" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-2.svg" loading="lazy" width="98" height="51" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-3.svg" loading="lazy" width="66" height="53" alt="Clients Logo" className="clients-logo" />
          <img src="./assets/img/Clients Logo-5.svg" loading="lazy" width="160" height="52" alt="Clients Logo" className="clients-logo" />
        </div>
        <div className="clients-overlay-one dark-overlay">
        </div>
      </div>
    </div>
   </section>
  <section className="home-three-learning">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-hflex home-three-learning-main" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
         <div className="home-three-learning-video-wrap">
          <div className="video-wrap-four" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            <div data-poster-url="./assets/img/Home One Video-poster-00001.jpg" data-video-urls="./assets/img/Home One Video-transcode.webm" data-autoplay="true" data-loop="true" className="video-three w-background-video w-background-video-atom">
              <video id="26d2d345-3019-133e-8bdd-ba522fe5e9d2-video" autoPlay loop style={{"backgroundImage":"url(\"./assets/img/Home One Video-poster-00001.jpg\")"}} muted playsInline data-object-fit="cover">
                <source src="./assets/img/Home One Video-transcode.mp4" />
                <source src="./assets/img/Home One Video-transcode.webm" />
              </video>
            </div>
          </div>
          <div className="video-three-top-image" style={{"opacity":"0","WebkitTransform":"translate3d(-100px, 0px, 0)","MozTransform":"translate3d(-100px, 0px, 0)","MsTransform":"translate3d(-100px, 0px, 0)","transform":"translate3d(-100px, 0px, 0)"}}>
            <img src="./assets/img/Free Course.avif" loading="lazy" width="272" alt="Course Count" className="border-radius-four" />
          </div>
          <div className="w-layout-vflex video-three-experience" style={{"opacity":"0","WebkitTransform":"translate3d(100px, 0px, 0)","MozTransform":"translate3d(100px, 0px, 0)","MsTransform":"translate3d(100px, 0px, 0)","transform":"translate3d(100px, 0px, 0)"}}>
            <div className="heading-one">
              {"25"}
            </div>
            <div className="experiace-text">
              {"Years of experiance"}
            </div>
          </div>
        </div>
        <div className="home-three-learning-right">
          <div className="small-heading text-dark">
            {"what we Offer"}
          </div>
          <h2 className="heading-two-gap-updown" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Personalized learning for your ambitions"}
          </h2>
          <p className="margin-bottom-twenty" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."}
          </p>
          <ul role="list" className="home-one-offer-list" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            <li className="heading-six">
              {"Skill-based instruction"}
            </li>
            <li className="heading-six">
              {"Analytics and insights"}
            </li>
            <li className="heading-six">
              {"Global certification"}
            </li>
            <li className="heading-six">
              {"Customizable courses"}
            </li>
          </ul>
          <div className="w-layout-hflex home-one-offer-box" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            <div className="w-layout-vflex home-one-offer-text">
              <div className="heading-five">
                {"Still have questions?"}
              </div>
              <p className="no-margin-bottom">
                {"Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam."}
              </p>
            </div>
            <div className="no-shrink">
              <a href="#/contact-three" className="button button-border-off w-inline-block">
                <div>
                  {"Get Started "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-two-testimonial">
    <div className="w-layout-blockcontainer home-two-testimonial-container w-container">
      <div className="w-layout-vflex home-two-testimonial-main">
        <img src="./assets/img/Quote Icons.svg" loading="lazy" width="159" height="116" alt="Quote" className="testimonial-two-quote" />
        <div data-delay="4000" data-animation="cross" className="testimonial-two-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
          <div className="w-slider-mask">
            <div className="w-slide">
              <div className="w-layout-vflex home-two-testimonial-items">
                <p className="home-two-testimonial-text">
                  {"“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”"}
                </p>
                <div className="home-two-testimonial-name">
                  {"Linda Grady"}
                </div>
                <div className="body-small-text">
                  {"Co-assistant manager"}
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-layout-vflex home-two-testimonial-items">
                <p className="home-two-testimonial-text">
                  {"\"Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis.\""}
                </p>
                <div className="home-two-testimonial-name">
                  {"Jim Adams"}
                </div>
                <div className="body-small-text">
                  {"Designer"}
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-two-slider-arrow slider-arrow-left w-slider-arrow-left">
            <img src="./assets/img/Slider Arrow Black.svg" loading="lazy" width="18" height="Auto" alt="Slider Arrow" className="icon-rotate" />
          </div>
          <div className="testimonial-two-slider-arrow slider-arrow-right w-slider-arrow-right">
            <img src="./assets/img/Slider Arrow Black.svg" loading="lazy" width="18" height="Auto" alt="Slider Arrow" />
          </div>
          <div className="display-off w-slider-nav w-round w-num">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cta-one">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-hflex cta-main cta-two-main">
        <div className="heading-three cta-heading text-white">
          {"Are you ready to start your journey?"}
        </div>
        <div className="w-layout-hflex cta-button-wrapper">
          <a href="#/course-three" className="button button-yellow w-inline-block">
            <div>
              {"Browse courses"}
            </div>
          </a>
          <a href="#/career" className="button white-border-button w-inline-block">
            <div>
              {"Became a teacher"}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="home-three-journey">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-vflex home-one-journey-main-wrap">
        <div className="small-heading text-dark">
          {"Why we are"}
        </div>
        <div className="heading-three heading-three-gap">
          {"Elevate your professional journey"}
        </div>
        <p className="no-margin-bottom journey-description">
          {"Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."}
        </p>
        <div className="journey-options-wrap">
          <div className="w-layout-vflex journey-cards">
            <img src="./assets/img/Books Icons.svg" loading="lazy" width="43" height="42" alt="Icon" />
            <div className="heading-five">
              {"Learn anything"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet conse non quis id viverra id proin."}
            </p>
          </div>
          <div className="w-layout-vflex journey-cards">
            <img src="./assets/img/Money Bag ICon.svg" loading="lazy" width="34" height="42" alt="Icon" />
            <div className="heading-five">
              {"Save money"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet conse non quis id viverra id proin."}
            </p>
          </div>
          <div className="w-layout-vflex journey-cards">
            <img src="./assets/img/Course Icon.svg" loading="lazy" width="38" height="42" alt="Icon" />
            <div className="heading-five">
              {"Flexible courses"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet conse non quis id viverra id proin."}
            </p>
          </div>
          <div className="w-layout-vflex journey-cards">
            <img src="./assets/img/Verified Icon.svg" loading="lazy" width="42" height="42" alt="Icon" />
            <div className="heading-five">
              {"Unlimited certificate"}
            </div>
            <p className="no-margin-bottom">
              {"Lorem ipsum dolor sit amet conse non quis id viverra id proin."}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
  </div>
      <Footer />
    </>
  );
}
