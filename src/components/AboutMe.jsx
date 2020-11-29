import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import './../components/StyleSheets/'
import "./StyleSheets/AboutMe.css";
import myPhoto from "./ImageAssets/bscott00.jpg";

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
            <img id="myPicture" src={myPhoto} alt="Pic of me" />
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
            <hr/>
            <h5>Full Bio:</h5>
            <p>
              Brandon Scott, based in San Francisco, leads Egon Zehnder’s US
              Software research organization within the Technology and
              Communications Practice group. He has deep expertise in SaaS,
              cloud services, digital transformation, and IT infrastructure. His
              particular specialty is executive search and assessment for CEO
              and product leadership, and he brings an intimate understanding of
              technology organizations in both large-scale public enterprise
              corporations as well small and mid-cap private equity and venture
              capital backed businesses.
            </p>
            <p>
              Brandon recently earned a certificate in full stack software
              development and data analytics from UC Berkley with newly
              developed skills in JavaScript, React, and SQL among other
              technologies. Known as an innovative problem solver passionate
              about bringing meaningful products and services to customers, he
              leverages his unique background that straddles business,
              technology, and design to lead teams that deliver material
              products.
            </p>
            <p>
              Prior to joining Egon Zehnder, Brandon was a Consultant through
              Tuft’s school of entrepreneurial leadership, where he helped
              develop digital marketing and GTM strategies for local startups in
              the greater Boston area, including Accena (acq by HubSpot). He
              also built and operated a specialty beverage business that served
              the Tufts community. Brandon started his career as a sales and
              customer service associate for State Farm’s banking and security
              products.
            </p>
            <p>
              Brandon earned a BA in economics with minors in entrepreneurship
              and astrophysics from Tufts University. Outside of work, he is an
              avid baseball fan, a fitness enthusiast, and enjoys painting.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
