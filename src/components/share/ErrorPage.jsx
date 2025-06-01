import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './ErrorPage.css'; // Optional for custom styling

const ErrorPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="p-5 bg-white shadow rounded-4 border border-danger">
              <FaExclamationTriangle size={60} className="text-danger mb-3" />
              <h1 className="display-4 fw-bold">Oops! Something Went Wrong</h1>
              <p className="lead text-muted mt-3">
                The page you’re looking for doesn’t exist or an unexpected error has occurred.
              </p>
              <Link to="/" className="btn btn-danger mt-4 px-4 py-2 fs-5">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
