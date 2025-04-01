import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import "./Footer.css"

const Footer = () => {
  return (
    <div  className="">
      <div>
          <p className="text-center text-white">ALL Right Reserved by@Sumit</p>
      </div>
      <div className="text-center text-white fs-4">
  <IoLogoLinkedin className="m-2 social-icon" />
  <FaInstagram className="m-2 social-icon" />
  <FaPinterest className="m-2 social-icon" />
  <FaTwitterSquare className="m-2 social-icon" />
</div>
    </div>
  )
}

export default Footer
