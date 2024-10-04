import React from "react";

import "../footer/Footer.scss";

import logo from "../../assets/logo.svg";

import iSpot from "../../assets/iSpot.svg";
import iMail from "../../assets/iMail.svg";
import iTel from "../../assets/iTel.svg";

export default function Footer() {
  return (
    <footer id="contact-section">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <img src={logo} />
              <p>We don't keep our beauty secrets</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 d-flex justify-content-center align-items-center">
            <div>
              <h3>Contact</h3>
              <div className="d-flex icon-contact align-items-center">
                <img
                  className="mx-1"
                  src={iSpot}
                  alt="Address"
                  width={25}
                  height={25}
                />
                <p>120 west street,200 street Dhaka</p>
              </div>
              <div className="d-flex icon-contact align-items-center">
                <img
                  className="mx-1"
                  src={iMail}
                  alt="E-mail"
                  width={25}
                  height={25}
                />
                <p>info.example@gmail.com</p>
              </div>
              <div className="d-flex icon-contact align-items-center">
                <img
                  className="mx-1"
                  src={iTel}
                  alt="Telephone"
                  width={25}
                  height={25}
                />
                <p>+0923793273</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 d-flex justify-content-center align-items-center">
            <div>
              <h3>Hours</h3>
              <p>Mont to Fri: 09am - 06pm</p>
              <p>Sat: 10am - 07pm</p>
              <p>Sun: 10am - 07pm</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center my-5">
          @2023 All Right Reserved by Rumi Aktar
        </div>
      </div>
    </footer>
  );
}
