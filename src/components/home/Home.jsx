import React from "react";

import homeImg from "../../assets/home-img.png";

import "../home/Home.scss";

export default function Home() {
  return (
    <section id="home-section" className="section-padding">
      <div className="container-fluid w-90 mt-auto">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 p-0 vh-85 justify-content-center align-items-center d-flex">
            <div>
              <h2 className="mb-5">
                A Wonderful Place <br />
                For Relaxation
              </h2>
              <h4 className="mb-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h4>
              <button>Book an Appointment</button>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 p-0">
            <img
              className="img-home position-absolute img-fluid"
              src={homeImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
