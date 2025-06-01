import React from "react";
import iphamarlogo from "/images/whiteLogo.png";
import digitals from "/images/digitals.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class="container-fluid my-5 footer-margin footerwala-bg ">
        <footer class="py-5">
          <div class="row ">
            <div class="col-lg-3 col-md-3 col-sm-6 mb-3">
              <img className="w-75" src={iphamarlogo} />
              <p className="text-start column-1">
                Iphamar is fostering trust and reliability among over 50,000
                healthcare providers across Nigeria and Africa. Iphamar is
                fostering trust and reliability among over 50,000 healthcare
                providers across Nigeria and Africa.
              </p>
              <h2 className="text-start pb-0">Follow</h2>
              <div className="d-flex align-items-center justify-content-evenly">
                <FaFacebook className="fs-3" />
                <FaInstagram className="fs-3" />
                <FaYoutube className="fs-3" />
                <FaLinkedin className="fs-3" />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column text-white">
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Features
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Pricing
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    FAQs
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column text-white">
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Features
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="PrivacyPolicy"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="TermsAndConditions"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                   to="#"
                    class="nav-link text-light p-0 text-body-secondary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 mb-3">
              <h5 className="text-center">Connectivity</h5>
              <p className="text-center"> Vision</p>
              <img src={digitals} className="img-fluid" />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-0 py-4 border-top">
            <p className="text-center">
              © 2025 Company, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
