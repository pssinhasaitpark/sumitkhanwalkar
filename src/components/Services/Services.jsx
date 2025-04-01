import React from "react";
import { FaGlassMartini } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa6";
import Button from "../Button/Button";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div>
        <p className="fs-1 fw-bold text-center">
          <span className="text-color">MY</span>
          <span className="text-color ms-3">SERVICES</span>
        </p>
      </div>
      <div className="row">
        <div className="col-sm-4 mb-3">
          <div className="hover-card card bg-black ">
            <div className="d-flex justify-content-center my-3">
              <div
                className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px" }}
              >
                <FaGlassMartini className="text-white bg-danger fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center">
              Sales Management
            </p>
            <div>
              <ul className="text-white">
                <li>Team Leadership</li>
                <li>Sales Strategy Development</li>
                <li>Client Relationship Building</li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="card bg-black hover-card">
            <div className="d-flex justify-content-center my-3">
              <div
                className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px" }}
              >
                <IoDiamondOutline className="text-white bg-danger fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center">
              Excel Expertise
            </p>
            <div>
              <ul className="text-white">
                <li>Data Visualization</li>
                <li>Automating Reports</li>
                <li>Advanced Data Analysis</li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="card bg-black hover-card">
            <div className="d-flex justify-content-center my-3">
              <div
                className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px" }}
              >
                <FaHashtag className="text-white bg-danger fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center">
              Data Analytics
            </p>
            <div>
              <ul className="text-white ">
                <li>Predictive Analytics</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
