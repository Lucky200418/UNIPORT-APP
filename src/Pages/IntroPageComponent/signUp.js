import React, { useEffect } from "react";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStudentAppContext } from "../../Contexts/ContextData";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { studentData, setStudentData } = useStudentAppContext();
  const navigate = useNavigate();

  function HandleSubmit(e) {
    const gmail = document.querySelector(".gmail").value;
    const checkBox = document.querySelector(".checkbox").checked;
    if (gmail.includes("@gmail.com") && checkBox) {
      navigate("/Main");
    }
    localStorage.setItem("IsSignedIn", true);
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        install: true,
      };
    });
  }

  function HandleChange(e) {
    const { name, value, type, checked } = e.target;

    setStudentData((prevalue) => {
      return {
        ...prevalue,
        userdetails: {
          ...prevalue.userdetails,
          [name]: type === "checkbox" ? !checked : value,
        },
      };
    });
  }

  return (
    <div className="bg-Image">
      <div className="main-grid-cont">
        <div className="img-Container-login">
          <div className="login-Arr-Left">
            <Link to={"/"}>
              <FaArrowLeft className="signUp-Icon" />
            </Link>
          </div>

          <div className="signUp-text">
            <FaLocationArrow />
            <p>Get Started</p>
          </div>
        </div>

        <div className="cont-2">
          <form className="form-container Input-Cont">
            <div className="form-heading Input-Cont">
              <h2>Sign Up</h2>
              <p>Sign Up to get started with maximum study experience</p>
            </div>

            <div className="Input-Cont">
              <h3>FirstName</h3>
              <input
                type="text"
                name="firstname"
                value={studentData.userdetails.firstname}
                onChange={HandleChange}
                required
              />
            </div>

            <div className="Input-Cont">
              <h3>LastName</h3>
              <input
                type="text"
                value={studentData.userdetails.lastname}
                name="lastname"
                onChange={HandleChange}
                required
              />
            </div>

            <div className="Input-Cont">
              <h3>E-mail</h3>
              <input
                type="email"
                value={studentData.userdetails.gmail}
                name="gmail"
                onChange={HandleChange}
                required
                className="gmail"
              />
            </div>
            {/* <div className="bottom-Login-pagetext Input-Cont">
              <p>
                Already have an account.{" "}
                <span>
                  <Link to={"/LoginPage"}>Sign In</Link>
                </span>
              </p>
            </div> */}
            <p className="termsSignUp">
              <label htmlFor="terms" className="termsSignUp">
                <input
                  id="terms"
                  onChange={HandleChange}
                  type="checkbox"
                  required
                  name="agreeTermsConditions"
                  className="checkbox"
                />
                Agree to our terms and conditions
              </label>
            </p>
            <button className="intialbtn" onClick={HandleSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
