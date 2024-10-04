import React from "react";

import imgCard1 from "../../assets/card1-img.avif";
import imgCard2 from "../../assets/card2-img.avif";
import imgCard3 from "../../assets/card3-img.avif";
import imgCard4 from "../../assets/card4-img.avif";

import "../our-services/Services.scss";

export default function Services() {
  return (
    <section id="service-section">
      <div className="container-fluid">
        <div className="row text-center p-5">
          <h3>Our Services</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center align-items-center d-flex my-5">
            <div className="card">
              <img className="card-img-top img-fluid" src={imgCard1} />
              <div className="card-body p-5">
                <h5 className="card-title">Facial Spa Treatment</h5>
                <p className="card-text">$65.00- 50 Minute Voucher</p>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the It is a long establi shed fact that a reader.
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-5">
            <div className="card">
              <img className="card-img-top img-fluid" src={imgCard2} />
              <div className="card-body p-5">
                <h5 className="card-title">Facial Spa Treatment</h5>
                <p className="card-text">$65.00- 50 Minute Voucher</p>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the It is a long establi shed fact that a reader.
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center align-items-center d-flex my-5">
            <div className="card">
              <img className="card-img-top img-fluid" src={imgCard3} />
              <div className="card-body p-5">
                <h5 className="card-title">Facial Spa Treatment</h5>
                <p className="card-text">$65.00- 50 Minute Voucher</p>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the It is a long establi shed fact that a reader.
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-5">
            <div className="card">
              <img className="card-img-top img-fluid" src={imgCard4} />
              <div className="card-body p-5">
                <h5 className="card-title">Facial Spa Treatment</h5>
                <p className="card-text">$65.00- 50 Minute Voucher</p>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the It is a long establi shed fact that a reader.
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
