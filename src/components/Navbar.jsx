import React from "react";
import './StyleSheets/Navbar.css'
import { Link } from "react-router-dom"
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
            <Link
              className="nav-link active text-secondary"
              id="about"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-secondary"
              id="portfolio"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
