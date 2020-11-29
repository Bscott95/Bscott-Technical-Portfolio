import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./StyleSheets/Footer.css";

export default function Footer() {
  return (
    <div>
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
