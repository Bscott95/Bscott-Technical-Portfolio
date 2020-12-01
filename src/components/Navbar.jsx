import React from "react";
import './StyleSheets/Navbar.css'
import BrandonScottLogo from './ImageAssets/BrandonScottLogo.png'

export default function ButtonAppBar() {
  return (
    <div>
      <header className="header">
        {/* <!-- title section --> */}
        <div className="title">
        <img
              src={BrandonScottLogo}
              alt="my logo" style={{backgroundColor: 'white', height: 50}}
            ></img>
        </div>
        {/* <!-- Nav bar section --> */}
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active text-secondary"
              id="about"
              href="about"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              id="portfolio"
              href="portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="contact">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
