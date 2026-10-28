

export default function SignUp() {
  return (
    <>
  <div className="w-users-userformpagewrap page-wrapper">
    <section className="membership-logo">
      <div className="w-layout-blockcontainer contact-three-container w-container">
        <div className="w-layout-hflex membership-nav">
          <a href="#/" className="w-inline-block">
            <img src="./assets/img/Elearna.svg" loading="lazy" width="105" height="26" alt="Elearna" />
          </a>
        </div>
      </div>
    </section>
    <div className="w-users-usersignupformwrapper sign-up-form-block">
      <div tabIndex="-1" className="w-users-userformsuccessstate w-form-success">
        <div className="w-users-userformheader">
          <img src="./assets/img/thumbs-up-72.svg" loading="lazy" alt="" />
          <h2>
            {"Account activated"}
          </h2>
        </div>
        <p>
          {"Your account was created successfully. You will be redirected shortly."}
        </p>
        <div>
          <a href="#/" className="w-inline-block">
            {"If nothing happens, click here."}
          </a>
        </div>
      </div>
      <form method="post">
        <div className="w-layout-vflex login-form-top">
          <h2 className="no-margin text-white">
            {"Sign up"}
          </h2>
          <div className="text-white">
            {"More then "}
            <span className="text-medium">
              {"50k students"}
            </span>
            {" join with us!"}
          </div>
        </div>
        <div className="w-users-userformheader form-header log-in-form">
          <label htmlFor="Email" className="field-label">
            {"Email address"}
          </label>
          <input placeholder="" id="wf-sign-up-email" maxLength="256" name="Email" className="user-email-field input-field-gap w-input" type="email" autoComplete="username" required />
          <label htmlFor="Name" className="field-label">
            {"Name"}
          </label>
          <input className="user-email-field input-field-gap w-input" maxLength="256" name="" data-name="" placeholder="" type="text" id="wf-sign-up-name" required />
          <label htmlFor="Password" className="field-label">
            {"Password"}
          </label>
          <input placeholder="" id="wf-sign-up-password" data-name="" maxLength="256" name="Password" className="user-email-field input-field-gap w-input" type="password" required />
          <label className="w-checkbox checkbox-field checkbox-align-top">
            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox checkbox-two">
            </div>
            <input name="" data-name="" placeholder="" type="checkbox" id="wf-sign-up-accept-privacy" required style={{"opacity":"0","position":"absolute","zIndex":"-1"}} />
            <span className="checkbox-label box-label w-form-label">
              {"By creating an account, I agree to this website's "}
              <a href="#/information/license" className="link-hover w-inline-block">
                {"privacy policy"}
              </a>
              {" and "}
              <a href="#/information/license" className="link-hover w-inline-block">
                {"terms of service"}
              </a>
            </span>
          </label>
          <label className="w-checkbox checkbox-field checkbox-align-top margin-bottom-twenty-five">
            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox checkbox-two">
            </div>
            <input name="" data-name="" placeholder="" type="checkbox" id="wf-sign-up-accept-communications" required style={{"opacity":"0","position":"absolute","zIndex":"-1"}} />
            <span className="checkbox-label box-label w-form-label">
              {"I consent to receive marketing emails."}
            </span>
          </label>
          <input data-wait="Please wait..." type="submit" className="w-users-userformbutton button button-yellow w-button" defaultValue={"Sign Up"} />
          <div className="w-users-userformfooter form-footer">
            <span className="text-light-white">
              {"Already have an account?"}
            </span>
            <a href="#/log-in" className="link-hover w-inline-block">
              {"Log In"}
            </a>
          </div>
        </div>
      </form>
      <div style={{"display":"none"}} className="w-users-userformerrorstate w-form-fail">
        <div className="user-form-error-msg">
          {"There was an error signing you up. Please try again, or contact us if you continue to have problems."}
        </div>
      </div>
      <div tabIndex="-1" className="w-users-usersignupverificationmessage w-form-verification">
        <div className="w-users-userformheader">
          <img src="./assets/img/email-72.svg" loading="lazy" alt="" />
          <h2>
            {"Verification Required"}
          </h2>
        </div>
        <p>
          {"Account verification required. Please check your email to find your unique verification link."}
        </p>
      </div>
    </div>
    <section className="contact-three-footer footer-four" style={{"opacity":"0","WebkitTransform":"translate3d(0px, 100px, 0)","MozTransform":"translate3d(0px, 100px, 0)","MsTransform":"translate3d(0px, 100px, 0)","transform":"translate3d(0px, 100px, 0)"}}>
      <div className="w-layout-blockcontainer contact-three-container w-container">
        <div className="w-layout-hflex contact-three-footer-main">
          <div className="w-layout-hflex contact-footer-links-wrapper">
            <a href="#/404" className="footer-small-link">
              {"404 Error"}
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
