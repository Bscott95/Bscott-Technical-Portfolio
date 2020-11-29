import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import './../components/StyleSheets/'
import './StyleSheets/AboutMe.css'
import myPhoto from './ImageAssets/bscott00.jpg'

export default function AboutMe() {
  return (
    <div>

      {/* <!-- start of the main section --> */}
      <main className="mainSection">
        <section className="content">
          {/* <!-- title section --> */}
          <div className="content-title">
            <h2>About Me</h2>
          </div>
          <hr />
          {/* <!-- main content --> */}
          <section className="content-subsection">
            <img
              id="myPicture"
              src={myPhoto}
              alt="Pic of me"
            />
            <p>
              Critical to the success of any organization are its leadership and
              the people within it. The world needs better leaders – ones that
              are value driven, ethical, altruistic, far-sighted, and admirable
              – corporations included. Businesses are pristine vehicles to enact
              great change, but the extent of that greatness is largely
              determined by the pilot in the cockpit.
            </p>
            <p>
              At Egon Zehnder, I’ve assessed hundreds, and placed over 100
              C-suite leaders at leading technology companies globally. These
              experiences have given me tremendous insight into the nuances of
              great leadership and I aspire to translate these learnings into
              building successful technology businesses that set the standard
              for generations to come.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
