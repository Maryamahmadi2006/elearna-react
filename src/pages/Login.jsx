

export default function Login() {
  return (
    <>
  <div className="w-users-userformpagewrap page-wrapper log-in">
    <section className="membership-logo">
      <div className="w-layout-blockcontainer contact-three-container w-container">
        <div className="w-layout-hflex membership-nav">
          <a href="#/" className="w-inline-block">
            <img src="./assets/img/Elearna.svg" loading="lazy" width="105" height="26" alt="Elearna" />
          </a>
        </div>
      </div>
    </section>
    <div className="w-users-userloginformwrapper log-in-form-block">
      <form method="post">
        <div className="login-form-top">
          <h2 className="no-margin text-white">
            {"Log in"}
          </h2>
          <div className="text-white">
            {"More than 50k students have joined Elearna already"}
          </div>
        </div>
        <div className="w-users-userformheader form-header log-in-form">
          <label htmlFor="Email" className="field-label">
            {"Email address"}
          </label>
          <input maxLength="256" placeholder="" name="Email" id="wf-log-in-email" className="user-email-field input-field-gap w-input" type="email" autoComplete="username" required />
          <label htmlFor="Password" className="field-label">
            {"Password"}
          </label>
          <input maxLength="256" placeholder="" name="Password" id="wf-log-in-password" className="user-email-field w-input" type="password" required />
          <input type="submit" data-wait="Please wait..." className="w-users-userformbutton button button-yellow w-button" defaultValue={"Log In"} />
          <div className="w-users-userformfooter form-footer">
            <span className="text-light-white">
              {"Don't have an account?"}
            </span>
            <a href="#/sign-up" className="link-hover w-inline-block">
              {"Sign Up"}
            </a>
          </div>
        </div>
      </form>
      <div style={{"display":"none"}} className="w-users-userformerrorstate w-form-fail">
        <div className="user-form-error-msg">
          {"We're having trouble logging you in. Please try again, or contact us if you continue to have problems."}
        </div>
      </div>
      <div className="w-layout-vflex test-login-user">
        <div className="w-layout-hflex test-log-in-top">
          <div className="log-in-border">
          </div>
          <div className="text-white">
            {"Test login"}
          </div>
          <div className="log-in-border">
          </div>
        </div>
        <div style={{"opacity":"0"}} className="text-light-white">
          {"Test user: elearnatest@gmail.com"}
        </div>
        <div style={{"opacity":"0"}} className="text-light-white">
          {"Password: Elearna1234"}
        </div>
      </div>
    </div>
    <section className="contact-three-footer">
      <div className="w-layout-blockcontainer contact-three-container top-border w-container">
        <div className="w-layout-hflex contact-three-footer-main">
          <div className="w-layout-hflex contact-footer-links-wrapper">
            <a href="#/information/style-guide" className="footer-small-link">
              {"Style guide"}
            </a>
            <a href="#/401" className="footer-small-link">
              {"Password protected"}
            </a>
            <a href="#/404" className="footer-small-link">
              {"404"}
            </a>
            <a href="#/information/license" className="footer-small-link">
              {"License"}
            </a>
          </div>
          <div className="w-layout-hflex contact-footer-links-wrapper">
            <div className="small-heading small-heading-mobile">
              {"Design by "}
              <a href="https://www.radianttemplates.com" target="_blank" className="footer-small-link">
                {"Radiant Templates"}
              </a>
            </div>
            <div className="small-heading small-heading-mobile">
              {"Powered by "}
              <a href="https://webflow.com/?r=0" target="_blank" className="footer-small-link">
                {"webflow"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>
  </div>
    </>
  );
}
