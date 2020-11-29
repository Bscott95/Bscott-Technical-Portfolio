import React from "react";
import './StyleSheets/Navbar.css'

export default function ButtonAppBar() {
  return (
    <div>
      <header className="header">
        {/* <!-- title section --> */}
        <div className="title">
        <img
              src="https://lh3.googleusercontent.com/proxy/lKosNCFoSt9DQ-bbo4_Xdbhdw2s_s9PyZxixv7d6mNzWrpBy0PNGCDld1VyTrKdWtnqizI0VDzyI5M91ewFE4bYPXzkZ-Qtx_4ymmSD3OIXtklGRwK5D6S6t0qyD77jLwpOXibUT"
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
