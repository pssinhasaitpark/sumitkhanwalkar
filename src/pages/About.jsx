import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const About = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div class="row">
          <div class="col-12 text-white">
            <h1 class="text-center mb-4">About Sumit Khanwalkar</h1>
            <p className="">
              <span className="fs-4 fw-bold"> Sumit Khanwalkar </span>is a
              highly skilled Sales Manager and Data Scientist with over 7 years
              of experience in the IT solutions industry. He holds a degree from
              IIT Madras, and his expertise spans across several key areas
              including data analytics, IT solutions, Excel, Python, Power BI,
              and advanced MS Office techniques such as pivot tables. Currently,
              Sumit works with <strong>Parkhya IT Solutions</strong>, where he
              plays a vital role in driving sales, managing client
              relationships, and providing cutting-edge analytical insights to
              enhance business performance.
            </p>

            <p>
              With an exceptional command over data-driven strategies, Sumit is
              known for his ability to interpret complex data and transform it
              into actionable insights. His work with Power BI, Excel, and
              Python allows him to tackle diverse challenges, making him an
              invaluable asset to any organization.
            </p>

            <h2 class="mt-4">Services Provided</h2>
            <ul>
              <li>
                <strong>Sales Management:</strong> Leading teams to identify and
                capitalize on sales opportunities, build client relationships,
                and drive organizational growth.
              </li>
              <li>
                <strong>Excel Expertise:</strong> Advanced skills in Excel,
                including data analysis, pivot tables, and data visualization,
                to optimize business processes.
              </li>
              <li>
                <strong>Data Analytics:</strong> Expertise in data analysis
                using Python and Power BI to interpret complex data sets and
                create actionable insights.
              </li>
              <li>
                <strong>IT Solutions:</strong> Providing tailored IT solutions
                that help businesses streamline operations and improve
                efficiency.
              </li>
              <li>
                <strong>Business Intelligence:</strong> Developing powerful
                data-driven strategies using advanced analytics to empower
                decision-makers with critical business intelligence.
              </li>
            </ul>

            <h2 class="mt-4">Skills and Tools</h2>
            <ul>
              <li>
                <strong>MS Office</strong> (Advanced Excel, Pivot Tables)
              </li>
              <li>
                <strong>Python</strong> (Data Science, Analysis)
              </li>
              <li>
                <strong>Power BI</strong> (Business Intelligence & Data
                Visualization)
              </li>
              <li>
                <strong>Sales Management</strong>
              </li>
              <li>
                <strong>Data Science & Analytics</strong>
              </li>
            </ul>

            <h2 class="mt-4">Education</h2>
            <p>
              <strong>IIT Madras</strong> (B.Tech in Computer Science)
            </p>

            <p>
              With his extensive experience and technical prowess, Sumit is
              dedicated to delivering innovative solutions and driving success
              across every facet of the business.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
