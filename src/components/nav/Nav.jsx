import React from "react";
import "../nav/Nav.scss";
import logo from "../../assets/logo.svg";

export default function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg p-md-1 position-relative">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Spa Website"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex">
            <li className="nav-item px-4">
              <a className="nav-link active" href="#home-section">
                Home
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link active" href="#service-section">
                Service
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link active" href="#about-section">
                About
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link active" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
