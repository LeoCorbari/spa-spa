import React from "react";

import imgAbout from "../../assets/about-img.avif";
import "../about-us/AboutUs.scss";

export default function AboutUs() {
  return (
    <section id="about-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0 img-parallax">
            <img className="img-fluid vh-100" src={imgAbout} />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-0 d-flex justify-content-center align-items-center">
            <div className="pl-5">
              <h2 className="font-weight-normal">About Us</h2>
              <p className="py-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
