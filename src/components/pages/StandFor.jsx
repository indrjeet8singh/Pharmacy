import React from 'react';
import { FaFlask, FaHeartbeat, FaCapsules } from 'react-icons/fa';

const StandFor = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">What We Stand For</h2>
      <div className="row text-center g-4">
        {/* Innovation */}
        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <FaFlask size={50} className="text-primary mb-3" />
              <h5 className="card-title">Innovation</h5>
              <p className="card-text">
                We invest in research and cutting-edge pharmaceutical solutions that shape the future of healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* Care & Compassion */}
        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <FaHeartbeat size={50} className="text-danger mb-3" />
              <h5 className="card-title">Care & Compassion</h5>
              <p className="card-text">
                Patient well-being is at the heart of what we do. We provide treatments with empathy and integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Quality & Safety */}
        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <FaCapsules size={50} className="text-success mb-3" />
              <h5 className="card-title">Quality & Safety</h5>
              <p className="card-text">
                Every product meets stringent quality standards to ensure safety, efficacy, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandFor;
