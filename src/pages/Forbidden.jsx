

export default function Forbidden() {
  return (
    <>
  <div className="utility-page-wrap passowrd-page-wrap">
    <div className="utility-page-content utility-form w-password-page w-form">
      <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" className="utility-page-form w-password-page">
        <img src="./assets/img/Password Lock.svg" alt="" width="93" height="108" />
        <h2 className="protected-heading">
          {"Protected Page"}
        </h2>
        <div className="w-layout-vflex password-form-field-wrapper">
          <label htmlFor="pass" className="small-heading w-password-page">
            {"Password"}
          </label>
          <input className="text-field-three w-password-page w-input" autoFocus="true" maxLength="256" name="pass" data-name="field" placeholder="Enter your password" type="password" id="pass" />
        </div>
        <input type="submit" data-wait="Please wait..." className="button button-yellow button-full-width w-password-page w-button" defaultValue={"Submit Password"} />
        <div className="w-password-page w-form-fail">
          <div>
            {"Incorrect password. Please try again."}
          </div>
        </div>
        <div style={{"display":"none"}} className="w-password-page w-embed w-script">
          <input type="hidden" name="path" defaultValue={"<%WF_FORM_VALUE_PATH%>"} />
          <input type="hidden" name="page" defaultValue={"<%WF_FORM_VALUE_PAGE%>"} />
        </div>
        <div style={{"display":"none"}} className="w-password-page w-embed w-script">
        </div>
      </form>
    </div>
  </div>
  <div>
  </div>
    </>
  );
}
