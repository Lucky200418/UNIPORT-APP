import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { FaBook, FaPen } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const ComponentLayout = function (props) {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const springProps = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
  });

  function NavigateToVanillaJsCbt() {
    window.location.href = props.address;
  }

  return (
    <animated.div
      style={{
        ...springProps,
      }}
    >
      <section className="layoutComponentContainer">
        <div id="lectureNote">
          {props.title === "CBT-Practice" ||
          props.title === "Study-past-questions" ? (
            <div onClick={NavigateToVanillaJsCbt} className="layoutComponent">
              <div className="layout-text">
                <h4>
                  {props.title}
                  <span>New</span>
                </h4>

                <div className="component-details">
                  <div className="detail">
                    <FaBook className="details-icon" />
                    <p>{props.detail1}</p>
                  </div>
                  <div className="detail">
                    <FaPen className="details-icon pen" />
                    <p>{props.detail2}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to={props.address} style={linkStyle}>
              <div className="layoutComponent">
                <div className="layout-text">
                  <h4>
                    {props.title}
                    <span>New</span>
                  </h4>

                  <div className="component-details">
                    <div className="detail">
                      <FaBook className="details-icon" />
                      <p>{props.detail1}</p>
                    </div>
                    <div className="detail">
                      <FaPen className="details-icon pen" />
                      <p>{props.detail2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </animated.div>
  );
};

export default ComponentLayout;
