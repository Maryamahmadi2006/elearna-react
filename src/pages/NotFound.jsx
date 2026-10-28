

export default function NotFound() {
  return (
    <>
  <div className="utility-page-wrap">
    <div className="utility-page-content">
      <div className="_404">
        {"404"}
      </div>
      <img src="./assets/img/page-not-found.svg" alt="" className="display-off" />
      <h2 className="not-found-heading">
        {"Oops! Page not found"}
      </h2>
      <div className="margin-bottom-twenty-five">
        {"Oops! it could be you or us, there is no page here. It might have been moved or deleted."}
      </div>
      <a href="#/" className="button button-yellow w-inline-block">
        <div>
          {"Back To Home"}
        </div>
      </a>
    </div>
  </div>
  <div>
  </div>
    </>
  );
}
