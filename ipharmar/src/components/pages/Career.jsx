import React from 'react';
import careerImg from '/images/career.png';
import { FaHeart, FaUsers, FaLightbulb } from 'react-icons/fa';

const jobListings = [
  {
    id: 1,
    title: "Pharmaceutical Sales Representative",
    location: "Lagos, Nigeria",
    description:
      "Join our dynamic sales team to promote innovative pharmaceutical products to healthcare professionals, driving impactful health solutions.",
  },
  {
    id: 2,
    title: "Clinical Research Associate",
    location: "Abuja, Nigeria",
    description:
      "Support cutting-edge clinical trials by coordinating with research teams and ensuring compliance with NAFDAC regulations.",
  },
  {
    id: 3,
    title: "Supply Chain Manager",
    location: "Port Harcourt, Nigeria",
    description:
      "Oversee our national distribution network, ensuring timely and compliant delivery of life-saving medications.",
  },
  {
    id: 4,
    title: "Quality Assurance Specialist",
    location: "Kano, Nigeria",
    description:
      "Ensure our products meet stringent quality standards through rigorous testing and adherence to Good Distribution Practices.",
  },
];

const culturePoints = [
  {
    id: 1,
    icon: <FaHeart size={32} className="text-success mb-3" />,
    title: "Passion for Health",
    description:
      "We are driven by a mission to improve lives through accessible and innovative pharmaceutical solutions.",
  },
  {
    id: 2,
    icon: <FaUsers size={32} className="text-success mb-3" />,
    title: "Collaborative Culture",
    description:
      "Join a team that values collaboration, diversity, and shared success in a fast-paced environment.",
  },
  {
    id: 3,
    icon: <FaLightbulb size={32} className="text-success mb-3" />,
    title: "Innovation at Core",
    description:
      "We encourage creative problem-solving and cutting-edge approaches to pharmaceutical challenges.",
  },
];

const Career = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid p-0 position-relative">
        <img src={careerImg} className="img-fluid w-100" alt="Career" />
        <div
          className="position-absolute top-50 start-50 h-100 w-100 translate-middle text-white text-center d-flex align-items-center justify-content-center"
          style={{
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem 2rem',
          }}
        >
          <h1 className="fw-bold display-5">Current Openings</h1>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Explore Our Opportunities</h2>
        <div className="row">
          {jobListings.map((job) => (
            <div className="col-md-6 mb-4" key={job.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-light fw-semibold text-success">
                  {job.title}
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {job.location}
                  </h6>
                  <p className="card-text">{job.description}</p>
                  <button className="btn btn-success">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Work With Us?</h2>
          <div className="row">
            {culturePoints.map((point) => (
              <div className="col-md-4 mb-4" key={point.id}>
                <div className="bg-white p-4 rounded text-center shadow-sm h-100">
                  {point.icon}
                  <h5 className="fw-bold">{point.title}</h5>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="footerwala-bg text-white text-center py-5">
        <div className="container">
          <h3>Contact Our HR Team</h3>
          <p>
            Ready to join us? Reach out to our HR team for more details or to
            submit your application.
          </p>
          <p>
            <strong>HR Contact:</strong> Jane Doe, HR Manager<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:careers@pharmadist.com" className="text-light text-decoration-underline">
              careers@pharmadist.com
            </a>
            <br />
            <strong>Phone:</strong> +234-800-555-7890<br />
            <strong>Address:</strong> 123 Health Avenue, Victoria Island, Lagos, Nigeria
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
