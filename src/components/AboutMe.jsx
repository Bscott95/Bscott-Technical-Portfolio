import React from "react";
import Nav from "react-bootstrap/nav";
import 'bootstrap/dist/css/bootstrap.css';
import './AboutMe.css'
import myPhoto from './ImageAssets/bscott00.jpg'

export default function AboutMe() {
  return (
    <div>
      <header className="header">
        {/* <!-- title section --> */}
        <div className="title">
          <h1>Brandon Scott</h1>
        </div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>

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
              alt="Picture of me"
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
      {/* <!-- footer section --> */}
      <footer>
        <div id="seperationBar"></div>
        <div className="box">
          <div id="footnote">
            &copy; <p>copyright</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
