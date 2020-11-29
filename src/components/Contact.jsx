import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./StyleSheets/Contact.css";
import { GitHub } from "@material-ui/icons";
// import './Contact.css'

export default function Contact() {
  return (
    <div>
      <main className="mainSection">
        <section className="content">
          {/* <!-- title section --> */}
          <div className="content-title">
            <h2>Contact</h2>
          </div>
          <hr />
          {/* <!-- main content --> */}
          <section className="content-subsection">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </form>
            <hr />
            <p style={{margin:0}}>email: btfs95@gmail.com</p>
            <p>link back to main site: <a href="http://brandonscott.info/"> click here
            </a></p>
            <a href="https://github.com/Bscott95/">
              <img
                style={{ height: 30, width: "auto", margin: 0 }}
                src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                className="card-img"
                alt="github icon"
              />
            </a>
            <p>Resume availible upon request</p>
          </section>
        </section>
      </main>
    </div>
  );
}
