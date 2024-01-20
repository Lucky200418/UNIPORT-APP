import { FaLocationArrow, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./signUp.css";

function Login() {
  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-Image">
      <div className="main-grid-cont">
        <div className="img-Container-login">
          <div className="login-Arr-Left">
            <Link to={"/signUpPage"}>
              <FaArrowLeft className="signUp-Icon" />
            </Link>
          </div>

          <div className="signUp-text">
            <FaLocationArrow />
            <p>Get Started</p>
          </div>
        </div>

        <div className="cont-2">
          <form onSubmit={HandleSubmit} className="form-container Input-Cont">
            <div className="form-heading Input-Cont">
              <h2>Login</h2>
              <p>Login to continue your Learning</p>
            </div>
            <div className="Input-Cont">
              <h3>E-mail</h3>
              <input type="text" name="email" />
            </div>
            <div className="Input-Cont">
              <h3>Password</h3>
              <input type="password" name="phoneNo" />
            </div>
            <button className="intialbtn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
