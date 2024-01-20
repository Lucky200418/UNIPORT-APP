import { FaArrowLeft, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutuswrapper">
      <div className="pageContainer AboutUsContainer">
        <div className="top-Page-header aboutPad">
          <Link to={"/AccountPage"} className="link">
            <FaArrowLeft />
          </Link>
          <h2>About Us</h2>
        </div>
        <div className="about-us-textContainer">
          <p>
            The UNIPORT E-learning app is a learning platform developed by Texas
            Technologies Ltd. Its a learning tool aimed at alleviating the
            stress of reading by students in school by compiling or bringing
            together past questions and answers of previous years , detailed
            lecture notes and learning aids like our note taker during lectures.
            This app is a PWA(Progressive Web Appllication) designed for
            simplicity in learning
          </p>
          <h2>Texas Technologies Ltd.</h2>
          <p>
            We are a software development Industry that specialize in
            development of web Appllication, Website Design, and app
            development. We are mostly venture into fullstack development and
            app developement. To make contact with us for more Information:
          </p>

          <div className="contactInfo">
            <div>
              <span>
                <FaPhone className="aboutIcon" />
              </span>{" "}
              PhoneNumber: <a href="tel:+07083464224">07083464224</a>
            </div>
            <div>
              <span>
                <FaWhatsapp className="aboutIcon" />
              </span>{" "}
              WhatsappNumber:{" "}
              <a href="https://wa.me/09022067994"> click: 09122067994</a>
            </div>
            <div>
              <span>
                <FaMailBulk className="aboutIcon" />
              </span>{" "}
              G-mial:{" "}
              <a href="mailto:ordulucky330@gmail.com">ordulucky330@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
