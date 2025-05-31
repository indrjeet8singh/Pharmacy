import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
  FaUserTie,
  FaHeadset,
  FaBuilding,
  FaQuestionCircle,
  FaRegEnvelope,
} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get in Touch With Us</h2>
        <p className="text-muted">We’re here to assist you across departments, regions, and queries.</p>
      </div>

      {/* Primary Contact Info */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <FaPhoneAlt className="text-success fs-3 mb-2" />
          <h5>Call Us</h5>
          <p>+234-800-555-7890</p>
        </div>
        <div className="col-md-4 mb-4">
          <FaEnvelope className="text-success fs-3 mb-2" />
          <h5>Email</h5>
          <p>careers@pharmadist.com</p>
        </div>
        <div className="col-md-4 mb-4">
          <FaMapMarkerAlt className="text-success fs-3 mb-2" />
          <h5>Visit</h5>
          <p>123 Health Avenue, Victoria Island, Lagos, Nigeria</p>
        </div>
      </div>

      {/* Office Hours */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <FaClock className="text-success fs-3 mb-2" />
            <h5>Office Hours</h5>
            <ul className="list-unstyled mb-0">
              <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Departmental Contacts */}
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <FaBuilding className="text-success fs-3 mb-2" />
            <h5>Department Contacts</h5>
            <ul className="list-unstyled">
              <li><strong>HR:</strong> hr@pharmadist.com</li>
              <li><strong>Sales:</strong> sales@pharmadist.com</li>
              <li><strong>Support:</strong> support@pharmadist.com</li>
              <li><strong>Partnerships:</strong> partners@pharmadist.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Support & FAQs */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <FaHeadset className="text-success fs-3 mb-3" />
            <h5>Need Immediate Support?</h5>
            <p>Our helpdesk is available 24/7 for urgent queries and ticketing.</p>
            <a href="mailto:support@pharmadist.com" className="btn btn-success">Email Support</a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <FaQuestionCircle className="text-success fs-3 mb-3" />
            <h5>FAQs</h5>
            <p>Visit our FAQ section for answers to common questions related to careers and products.</p>
            <a href="/faq" className="btn btn-outline-success">Go to FAQs</a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="bg-white shadow-sm p-4 rounded text-center">
            <FaRegEnvelope className="text-success fs-3 mb-2" />
            <h5>Subscribe to Our Newsletter</h5>
            <form className="row justify-content-center mt-3">
              <div className="col-md-6 mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="col-md-2 mb-2">
                <button type="submit" className="btn btn-success w-100">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mb-5">
        <h5>Connect with Us</h5>
        <div className="d-flex justify-content-center gap-3 fs-4 mt-3">
          <a href="#" className="text-success"><FaFacebook /></a>
          <a href="#" className="text-success"><FaTwitter /></a>
          <a href="#" className="text-success"><FaInstagram /></a>
          <a href="#" className="text-success"><FaLinkedin /></a>
          <a href="#" className="text-success"><FaWhatsapp /></a>
          <a href="#" className="text-success"><FaGlobe /></a>
        </div>
      </div>

      {/* Map */}
      <div className="mb-5">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.100937458!2d3.3053851!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c30f92e5bfb%3A0xf91d6a34c6e5287e!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="text-center text-muted small">
        &copy; {new Date().getFullYear()} PharmaDist. All rights reserved.
      </div>
    </div>
  );
};

export default ContactUs;
