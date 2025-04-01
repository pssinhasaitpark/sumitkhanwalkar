import React from "react";
import { image4 } from "../../assets/images/index";
import Button from "../Button/Button";
import "./Devloper.css";

const Developer = () => {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-sm-6 ">
          <div className="image4">
            <img
              loading="lazy"
              className="w-100"
              src={image4}
              alt="Devloperimage"
            />
          </div>
        </div>
        <div className="col-sm-6  d-flex justify-content-center">
          <div className="text-white">
            <p className=" devloperTitle fw-bold ">
              <span className="text-color">Sales Manager and </span>{" "}
              <span className="text-color">Data Scientist</span>
            </p>
            <ul>
              <li>
                <strong>Sales Management:</strong>
                <ul>
                  <li>
                    Lead teams to identify new sales opportunities and build
                    lasting client relationships.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Excel Expertise:</strong>
                <ul>
                  <li>
                    Advanced skills in Excel for data analysis and creating
                    pivot tables.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Data Analytics:</strong>
                <ul>
                  <li>
                    Specialized in data analysis using Python and Power BI to
                    extract insights.
                  </li>
                </ul>
              </li>
            </ul>

            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
