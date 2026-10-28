import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

export default function ContactThree() {
  return (
    <>
      <SiteHeader />
  <div className="overflow-hidden">
    <section className="contact-three">
      <div className="contact-three-main">
        <div className="w-layout-vflex contact-three-content">
          <div className="contact-big-text" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Contact"}
          </div>
          <p className="contact-big-description" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            {"Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra tellus pulvinar amet aliquam. Vestibulum hac tincidunt."}
          </p>
          <div className="w-layout-vflex contact-three-information-box">
            <a href="mailto:info@example.com" className="contact-three-information" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
              {"info@example.com"}
            </a>
            <div className="contact-three-border" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
            </div>
            <a href="tel:8881234567" className="contact-three-information" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
              {"(888) 123 4567"}
            </a>
          </div>
        </div>
      </div>
      <div className="icon-box" style={{"opacity":"0","WebkitTransform":"scale3d(0.75, 0.75, 1)","MozTransform":"scale3d(0.75, 0.75, 1)","MsTransform":"scale3d(0.75, 0.75, 1)","transform":"scale3d(0.75, 0.75, 1)"}}>
        <img src="./assets/img/Icons.svg" loading="lazy" width="34" height="37" alt="Icon" />
      </div>
      <div className="contact-three-form">
        <div style={{"WebkitTransform":"translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MsTransform":"translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="contact-three-form-pop-up">
          <div className="no-margin w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get">
              <div className="contact-three-form-top">
                <div className="heading-four">
                  {"Contact information"}
                </div>
              </div>
              <div className="contact-three-form-inside">
                <input className="text-field-two w-input" maxLength="256" name="Your-name" data-name="Your name" placeholder="Your name" type="text" id="Your-name" required />
                <input className="text-field-two w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required />
                <input className="text-field-two w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Phone" type="tel" id="Phone" required />
                <input className="text-field-two margin-bottom-thirty w-input" maxLength="256" name="Enquiry-type" data-name="Enquiry type" placeholder="Enquiry type" type="text" id="Enquiry-type" required />
                <input type="submit" data-wait="Please wait..." className="button button-yellow button-full-width w-button" defaultValue={"Send message"} />
              </div>
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
    </section>
  </div>
  <div>
  </div>
      <Footer />
    </>
  );
}
