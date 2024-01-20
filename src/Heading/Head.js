import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSun } from "react-icons/fa";
import "./Head.css";

const Heading = function (props) {
  return (
    <div className="MainNavBar">
      <Link to={props.location} className="link">
        <FaArrowLeft />
      </Link>
      <h3>
        UNI<span>PORT</span>
      </h3>
      <FaSun />
    </div>
  );
};

export default Heading;
