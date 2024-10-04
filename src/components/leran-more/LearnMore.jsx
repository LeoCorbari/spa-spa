import React from "react";
import "../leran-more/LearnMore.scss";

import imgLearnMore from "../../assets/learn-more.png";

export default function LearnMore() {
  return (
    <section id="learn-more-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 px-0 d-flex justify-content-center align-items-center">
            <div>
              <h4 className="pb-5">
                Nice to meet you <br />
                in spa
              </h4>
              <button>Learn More</button>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 p-0 img-parallax">
            <img className="img-fluid vh-100" src={imgLearnMore} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
