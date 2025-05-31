import React, { useEffect, useRef, useState } from "react";
import img1 from "/images/about1.png";
import OurPartners from "./OurPartners";
import OurLatestUpdate from "./OurLatestUpdate";
import Contact from "./Contact";

const Empower = () => {
  const data = [
    { target: 1000, label: "pharmaceuticals", duration: 3000 },
    { target: 500, label: "pharmaceuticals", duration: 1200 },
    { target: 350, label: "pharmaceuticals", duration: 1100 },
    { target: 250, label: "pharmaceuticals", duration: 1000 },
  ];

  const [counts, setCounts] = useState(data.map(() => 0));
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          data.forEach((item, index) => {
            let start = 0;
            const step = Math.max(Math.floor(item.duration / item.target), 1);
            const interval = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
              if (start === item.target) clearInterval(interval);
            }, step);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, data]);

  return (
    <>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold display-6 text-black lh-base">
              Empowering Communities,
              <br />
              Transforming Lives
            </h1>
            <p className="mt-3 text-secondary" style={{ maxWidth: "24rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget
              ultricies facilisis donec sit amet...
            </p>
            <div className="mt-4 d-flex flex-wrap gap-2">
              <button className="btn btn-success px-4 py-2 fw-semibold">
                Donate Now
              </button>
              <button className="btn btn-outline-success px-4 py-2 fw-semibold">
                Get Involved
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="angled-container">
              <img className="img-fluid" src={img1} alt="Visual Section" />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container-fluid py-5 solution-bg-color">
        <div className="container">
          <h3 className="text-center mb-4">Who We Are</h3>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img src={img1} className="img-fluid" alt="About Us" />
            </div>
            <div className="col-12 col-lg-6">
              <p>
                At Iphamar, we are revolutionizing Africa’s pharmaceutical
                supply chain to combat counterfeit and substandard medicines...
                (your content)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="container-fluid py-5" ref={sectionRef}>
        <h3 className="text-center mb-4">Our Impact</h3>
        <div className="container bg-forImpact">
          <div className="row text-center justify-content-center">
            {data.map((item, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 mb-4">
                <h1>{counts[index]}+</h1>
                <h5>{item.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Key Initiative */}
      <div className="container py-5">
        <h2 className="mb-3">Our Key Initiative</h2>
        <button className="btn btn-success mb-4">Initiative Key</button>

        <div className="row g-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card text-white position-relative">
                <img
                  src={img1}
                  className="card-img img-fluid"
                  alt="..."
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div
                  className="card-img-overlay d-flex flex-column justify-content-end"
                  style={{ background: "rgba(0, 0, 0, 0.5)" }}
                >
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circle and Text Section */}
      <div className="container-fluid p-0">
        <div className="container me-5 pe-5 h-100 d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
          {/* Left Side: Circle with Image */}
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
            <div
              className="position-relative d-flex justify-content-center align-items-start"
              style={{
                minWidth: "100%",
                minHeight: "100%",
                marginRight: "100px",
              }}
            >
              <div
                className="bg-warning rounded-circle"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  aspectRatio: "1 / 1",
                  position: "relative",
                }}
              >
                <img
                  src={img1}
                  alt="half on circle"
                  className="position-absolute"
                  style={{
                    width: "150%",
                    height: "auto",
                    maxHeight: "200px",
                    objectFit: "cover",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-25%, -50%)",
                    borderRadius: "10px",
                    zIndex: 2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="text-center text-md-start pl-5 ml-5 col-lg-6 col-md-6 col-sm-12">
            <div className="py-5 pb-5 bg-info px-3 rounded">
              <p className="mb-3 text-white">
                Iphamar is fostering trust and reliability among over 50,000{" "}
                <br />
                healthcare providers across Nigeria and Africa. At Iphamar, we
                are revolutionizing Africa’s pharmaceutical supply chain to
                combat counterfeit and substandard medicines...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 solution-bg-color">
        <h2 className="text-center ">
          Our <span className="text-success">Valued Partners</span>
        </h2>
        <OurPartners />
      </div>

      <OurLatestUpdate />
      <Contact />
    </>
  );
};

export default Empower;
