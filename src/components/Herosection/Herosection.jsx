import React from "react";
import { image2 } from "../../assets/images/index";
import Button from "../Button/Button";
const Herosection = () => {
  return (
    <div>
      <div className="row my-3">
        <div className="col-sm-6 py-5">
          <div className="text-white my-auto">
            <p className="fs-1 fw-bold m-0 text-color">I'm Sumit Khanwalker</p>
            <p className="fs-2 fw-light">Sales Manager</p>
            <p>
              {" "}
              Hi! I am an experienced Sales Manager and Data Scientist with over
              7 years in the IT solutions industry. With a degree from IIT
              Madras, Sumit excels in data analytics, IT solutions, Excel,
              Python, Power BI, and advanced MS Office techniques like pivot
              tables. He is currently working with Parkhya IT Solutions, where
              he drives sales, builds client relationships, and delivers
              impactful data-driven insights to optimize business performance.
            </p>
            <Button link="/about" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="homeimg" style={{height:"30rem"}}>
            <img
              loading="lazy"
              className="w-100 h-100 object-fit-contain  "
              src={image2}
              alt="Heroimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
