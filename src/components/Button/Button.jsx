import React from 'react'
import { Link } from 'react-router-dom'; 
import "./Button.css";

const Button = ({ link }) => {
  return (
    <div>
      <Link to={link}> 
        <button className="btn bg-danger rounded-pill text-white fw-light px-4 ">
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default Button;
