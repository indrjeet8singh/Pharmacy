import React from "react";
import aboutImg from "/images/about1.png";
import aboutImg2 from "/images/ourStory.png";
import aboutImg3 from "/images/whatWeDo.png";
import Patrick from "../../../public/assets/team/Patrick.png";
import Precious from "../../../public/assets/team/Precious.png";

import Stephen from "../../../public/assets/team/Stephen.png";
import Taiwo from "../../../public/assets/team/Taiwo.png";

import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiCartwheel } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className="container-fluid p-0 bg-success">
        <div className="row g-0">
          <div className="col-12">
            <div className="container p-5">
              <h2 className="text-center text-white">
                About <span className="text-dark">Us</span>
              </h2>
              <p className="text-center text-white">
                This is why we at Iphamar have crafted a plan for transforming
                Africa’s pharma market, one prescription at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* First Image-Text Section */}
      <div className="container my-5 bg-success">
        <div className="row g-0">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={aboutImg} className="img-fluid" alt="Iphamar Mission" />
          </div>
          {/* Text Section */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="container-fluid p-5">
              <h3 className="text-center text-white">Our Mission</h3>
              <p className="text-start text-white">
                Iphamar™ Limited is a leading health-tech pharmaceutical supply
                chain company founded in 2021 and headquartered in Lagos,
                Nigeria. We are transforming pharmaceutical distribution for the
                well-being of Africa. Our company was founded with a mission to
                prevent the loss of hundreds of thousands of lives every year
                due to the lack of access to quality pharmaceutical products and
                medical devices. We are committed to achieving the UN's
                Sustainable Development Goal of promoting good health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Text-Image Section */}
      <div className="container p-0 ">
        <div className="row g-0">
          {/* Text Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1 order-2">
            <div className="container w-100 h-75 bg-warning p-5">
              <h3 className="text-center text-dark">Our Story</h3>
              <p className="text-start text-dark">
                Founded in 2021, Iphamar™ Limited is driven by a vision to
                revolutionize pharmaceutical distribution across Africa. Based
                in Lagos, Nigeria, we focus on bridging gaps in access to
                quality medical products, ensuring healthier communities. Our
                commitment to innovation and sustainability aligns with global
                health goals, making a tangible impact one prescription at a
                time.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2 order-1">
            <img
              src={aboutImg2}
              className="img-fluid w-100 h-75"
              alt="Iphamar Story"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center pb-3">What we stand for</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card h-100 py-5">
              <span className="m-auto ">
                <GiCartwheel className="fs-1" />
              </span>
              <div class="card-body">
                <h5 class="card-title text-center ">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card h-100 py-5">
              <span className="m-auto">
                <IoLocationOutline className="fs-1" />
              </span>
              <div class="card-body">
                <h5 class="card-title text-center ">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card h-100 py-5">
              <span className="m-auto">
                <FaHandsHoldingCircle className="fs-1" />
              </span>
              <div class="card-body">
                <h5 class="card-title text-center ">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid solution-bg-color p-0 my-5 ">
        <div className="container">
          <div className="row g-0">
            {/* Text Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1 ">
              <div className="container w-100 h-auto  p-5">
                <h3 className="text-start text-dark">
                  <span className="text-warning">What</span> We Do
                </h3>
                <p className="text-start text-dark">
                  Lack of access to affordable, high-quality pharmaceuticals is
                  a major issue in Africa. In fact, 41% of pharmaceuticals are
                  counterfeit, substandard, or fake. A 2023 UN study found that
                  about 500,000 Africans die annually due to fake pharmaceutical
                  products.
                </p>
                <p>
                  This is why we at Iphamar have crafted a plan for transforming
                  Africa’s pharma market, one prescription at a time.
                </p>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2">
              <img
                src={aboutImg3}
                className="img-fluid w-100 h-auto"
                alt="Iphamar Story"
              />
            </div>
          </div>
        </div>
      </div>
<div class="container my-5">
  <h2 class="text-center mb-4">Goals at <span class="text-primary">Iphamar™</span></h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Innovation</h5>
          <p class="card-text">At Iphamar™, we strive to innovate in every aspect of healthcare and pharmaceutical research, bringing better solutions to people worldwide.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Quality Commitment</h5>
          <p class="card-text">We ensure top-notch quality across all our products and services, maintaining strict standards and global compliance.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Sustainability</h5>
          <p class="card-text">Iphamar™ is dedicated to sustainable practices that protect our planet and ensure a better future for generations to come.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="container-fluid p-0 my-5 mb-5 bg-white">
        <div class="container my-4">
          <h2 className="text-center py-5">The Team</h2>
          <p className="text-center mb-5 ">
            This is why we at Iphamar have crafted a plan for transforming
            Africa’s
            <br /> pharma market, one prescription at a time.
          </p>
          <div class="row row-cols-1 row-cols-md-4 g-4 pb-5">
            <div class="col">
              <div class="card h-100">
                <img src={Patrick} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Patrick</h5>
                  <p class="card-text">
                    This is a longer card with supporting{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={Precious} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Precious</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={Stephen} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Stephen</h5>
                  <p class="card-text">
                    This is a longer card with supporting text
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={Taiwo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Taiwo</h5>
                  <p class="card-text">
                    This is a longer card with supporting text{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
