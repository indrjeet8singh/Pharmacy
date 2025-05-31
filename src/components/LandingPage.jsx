import React from "react";
import Header from "./share/Header";
import Footer from "./share/Footer";
import { Outlet } from "react-router-dom";
const landingpage = () => {
  return (
    <>
      <div className="container-fluid  p-0">
        <div className="row fixed-top border-bottom">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>
      <div className="container-fluid  p-0 outletpage">
        <div className="row">
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 p-0">
            <Footer className="pb-0" />
          </div>
        </div>
      </div>
    </>
  );
};
export default landingpage;
