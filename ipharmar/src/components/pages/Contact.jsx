import React from 'react';
import contactImg from '../../../public/assets/team/contactImg.jpg';

const Contact = () => {
  return (
    <div className="container-fluid bg-white  py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row g-4 align-items-stretch">
          
          {/* Image Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
            <div className="w-100">
              <img
                src={contactImg}
                className="img-fluid rounded shadow w-100 h-100"
                alt="Contact"
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
            <div className="bg-warning p-5 rounded shadow w-100 d-flex flex-column justify-content-center">
              <form className="w-100 p-3">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>

                <button type="submit" className="btn footerwala-bg w-100">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
