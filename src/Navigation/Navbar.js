import React, { useState } from "react";
import { FaBell, FaCommentDots, FaHome, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useStudentAppContext } from "../Contexts/ContextData";
import "./Navbar.css";

const Navbar = function () {
  const { studentData, setStudentData } = useStudentAppContext();

  function HandleDisplayNotifCount() {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        notificationCount: 0,
      };
    });
  }
  return (
    <div className="NavigationBar">
      <nav>
        <NavLink
          exact
          to="/Main"
          activeClassName="active"
          className="Nav-Container"
        >
          <div className="nav-link">
            <span className="icon">
              <FaHome className="icon-Nav" />
            </span>
            <span className="text">Home</span>
          </div>
        </NavLink>

        <NavLink to="/Chat" activeClassName="active" className="Nav-Container">
          <div className="nav-link">
            <span className="icon">
              <FaCommentDots className="icon-Nav" />
            </span>
            <span className="text">Chat</span>
          </div>
        </NavLink>

        <NavLink
          to="/NewsFeed"
          activeClassName="active"
          className="Nav-Container"
        >
          <div className="nav-link">
            <span className="icon">
              <FaBell className="icon-Nav" onClick={HandleDisplayNotifCount} />
              {studentData.notificationCount > 0 ? (
                <span className="navCount">
                  <span>{studentData.notificationCount}</span>
                </span>
              ) : (
                ""
              )}
            </span>

            <span className="text">NewsFeed</span>
          </div>
        </NavLink>

        <NavLink
          to="/AccountPage"
          activeClassName="active"
          className="Nav-Container"
        >
          <div className="nav-link">
            <span className="icon">
              <FaUserCircle className="icon-Nav" />
            </span>
            <span className="text">Account</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
