import React from "react";
import SwiperSlider from "./SwiperSlider";
import img3 from "/assets/homePage2slider/3.png";
import StandFor from "./StandFor";
import Leadership from "./LeadershipContainer";
import OurPartners from "./OurPartners";
import { FaHandsHelping, FaLightbulb, FaLeaf, FaHeart } from "react-icons/fa";

const Solution = () => {
  return (
    <>
      <SwiperSlider />

      {/* Angled Decorative Section */}
      <div className="position-relative w-100">
        <div className="col-12">
          {/* Image and Text Section Below */}
          <div className="container py-5">
            <div className="row align-items-center">
              {/* Left Side Image */}

              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={img3}
                  alt="Descriptive Alt"
                  className="img-fluid w-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Right Side Text */}
              <div className="col-md-4">
                <h2 className="mb-3">Our Commitment</h2>
                <p>
                  We strive to deliver excellence in everything we do. Our team
                  of professionals is dedicated to providing high-quality
                  services tailored to your needs.
                </p>
                <p>
                  Whether you're looking for innovation, integrity, or
                  inspiration—we're here to support your journey every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "50%",
              height: "400px",
              backgroundColor: "#269146",
              clipPath: "polygon(34% 0, 65% 0, 100% 40%, 100% 78%)",
            }}
          />
        </div>
      </div>

      <StandFor />
      <Leadership />
      <div className="container-fluid p-0 my-5 solution-bg-color">
        <h2 className="text-center ">
          Our <span className="text-success">Steemed Donores </span>
        </h2>
        <OurPartners />
      </div>
      <div className="container-fluid p-0">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-0"></div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="container footerwala-bg ">
              <h3 className="text-center text-white py-3">
                Join Us in Making a difference
              </h3>
              <p className="text-center">
                Your support empowers innovation, fuels progress, and touches
                lives across communities. Together, we can create a healthier,
                brighter, and more compassionate world.
              </p>
              <div className="container text-center py-2">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-3 mb-2">
                    <FaHandsHelping size={40} className="text-warning mb-2" />
                    <p>Support & Unity</p>
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <FaLightbulb size={40} className="text-warning mb-2" />
                    <p>Innovative Ideas</p>
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <FaLeaf size={40} className="text-warning mb-2" />
                    <p>Sustainability</p>
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <FaHeart size={40} className="text-warning mb-2" />
                    <p>Care & Compassion</p>
                  </div>
                  <buttton className="btn btn-light w-50 mb-2">Here Button</buttton>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-0"></div>
        </div>
      </div>
    </>
  );
};

export default Solution;
