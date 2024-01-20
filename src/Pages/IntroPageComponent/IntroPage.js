import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStudentAppContext } from "../../Contexts/ContextData";
import "./IntroCss.css";
import { ThreeDots } from "react-loader-spinner";

const IntroPage = function () {
  const { studentData } = useStudentAppContext();
  const SignedIn = localStorage.getItem("IsSignedIn");
  localStorage.setItem("reload", undefined);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "Images/otherPage.jpg";
    img.onload = () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 2000);
    };

    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth <= 768; // Adjust the width threshold as needed
      setIsMobile(isMobileDevice);
    };

    // Listen for resize events to detect changes in screen size
    window.addEventListener("resize", checkIsMobile);

    // Initial check
    checkIsMobile();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        // Render your regular content for mobile devices
        <div className="IntroMain gradient-background">
          {imageLoaded ? (
            <>
              <img
                src="Images/otherPage.jpg"
                alt="image"
                className="IntroImage"
              />

              <div className="logo-cont">
                <img
                  className="imsu-logo"
                  src="./Images/uniportLogo2.png"
                  alt="Uniport logo"
                />
                <p className="logo-text">University of portharcourt</p>
              </div>
              <div className="ButtonContainer">
                <Link
                  to={
                    studentData.install
                      ? SignedIn
                        ? "/Main"
                        : "/signUpPage"
                      : "/InstallPage"
                  }
                >
                  <button className="Login-btn btn">Get Started</button>
                </Link>
              </div>
              <p className="bottom-aside-text">Bluewave Tech innovations</p>
            </>
          ) : (
            <div className="IntroLoader">
              <ThreeDots />
            </div>
          )}
        </div>
      ) : (
        // Render a message for non-mobile (desktop) devices
        <div className="DestopErrorMessage">
          <h1>Not Available on Desktop</h1>
          <p>This site is only available on mobile devices.</p>
        </div>
      )}
    </div>
  );
};

export default IntroPage;
