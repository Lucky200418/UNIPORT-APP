import { useState } from "react";
import {
  FaArrowLeft,
  FaPhone,
  FaWhatsapp,
  FaMailBulk,
  FaArrowRight,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import PromptActivationSuccess from "../../UtilityPage/promptActivationSuccess";
import PromptActivationFailed from "../../UtilityPage/PromptActivationFailed";
import { useStudentAppContext } from "../../Contexts/ContextData";
import Confetti from "../../UtilityPage/confetti";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ActivateApp() {
  const [activateValue, setActivateValue] = useState("");

  const { studentData, setStudentData, HandleOnlineNavigation } =
    useStudentAppContext();
  const naira = "\u20A6";

  function HandlePageNavigate() {
    window.history.back();
  }

  function HandleActivationPrompt(status) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        [status]: false,
      };
    });
  }

  function HandleActivation() {
    if (!navigator.onLine) {
      toast.success("You are currently Offline", {
        style: {
          fontSize: "2rem",
        },
      });
      setActivateValue("");
    } else {
      // Create an XMLHttpRequest object
      var xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        "https://academysolution.online/check_activation.php",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      // Set up a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);

          if (response.tokenMatched) {
            const activated = localStorage.getItem("activated");
            if (activated) {
              localStorage.setItem("activated", true);
            }
            // Token matched, set localStorage item
            setStudentData((prevalue) => {
              return {
                ...prevalue,
                Activated: true,
                activationSuccessful: true,
              };
            });
          } else {
            const activated = localStorage.getItem("activated");
            if (activated) {
              localStorage.setItem("activated", false);
            }
            // Token did not match
            setStudentData((prevalue) => {
              return {
                ...prevalue,
                activationFailed: true,
              };
            });
          }
        }
      };

      // Send the request
      xhr.send("activationCode=" + activateValue);
      setActivateValue("");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="top-Page-header">
        <FaArrowLeft onClick={HandlePageNavigate} />
      </div>
      <div className="pageContainer">
        <div className="topBarActivateApp">
          <h1>Activate App</h1>
          <p>
            Activate to get access to our full resources of past questions and
            answers and lecture notes. Activate app once and use forever.
            <br />
            <br />
            Activation fee at <b className="bold">{naira}1000</b>
          </p>
        </div>
        {studentData.Activated ? (
          <>
            <div className="activateContainer paddingActivate activatedMessage">
              <div className="activatedMessage-top">
                <FaCheckCircle className="activatedMessage-top-icon bouncing-text" />
                <p className="bouncing-text">SUCCESS</p>
              </div>
              <div className="activatedMessage-bottom">
                <p>
                  Congratulations, You have sucessfully activated the app. Enjoy
                  access to our full resources
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="activateTitle paddingActivate ">
              Choose payment options
            </h3>
            <div className="activateContainer paddingActivate ">
              <p>
                Enter 16 digits activation code to enjoy full access to this
                amazing. Activate once and use forever
              </p>
              <div className="FlexCol ">
                <p>Activation Code</p>
                <input
                  placeholder="Activation pin here"
                  type="alphanumeric"
                  value={activateValue}
                  onChange={(e) => setActivateValue(e.target.value)}
                />
              </div>

              <button onClick={HandleActivation}>Activate App</button>
            </div>

            <h3 className="paddingActivate ">Pay Online</h3>
            <a
              onClick={HandleOnlineNavigation}
              href={
                navigator.onLine &&
                "https://myacademysolution.com/forms/login.php"
              }
              className="Insta-link"
            >
              <div className="paystackContainer paddingActivate ">
                <p>Pay online through secure platform</p>
                <FaChartBar className="IconColor" />
              </div>
            </a>
          </>
        )}

        <h3 className="activateTitle paddingActivate ">Contact us directly</h3>
        <div className="activateContainer contactUsActivate paddingActivate ">
          <div>
            <span>
              <FaPhone className="IconColor" />
            </span>{" "}
            PhoneNumber:{" "}
            <b>
              click: <FaArrowRight />{" "}
              <a href="tel:+08061932320" className="link-color">
                08061932320
              </a>
            </b>
          </div>

          <div>
            <span>
              <FaWhatsapp className="IconColor" />
            </span>{" "}
            WhatsappNumber:{" "}
            <b>
              click: <FaArrowRight />{" "}
              <a
                onClick={HandleOnlineNavigation}
                href={studentData.isOnline && "https://wa.me/+2348061932320"}
                className="link-color"
              >
                {" "}
                08061932320
              </a>
            </b>
          </div>
          <div>
            <span>
              <FaMailBulk className="IconColor" />
            </span>{" "}
            G-Mail:
            <b>
              click: <FaArrowRight />
              <a
                onClick={HandleOnlineNavigation}
                href={
                  studentData.isOnline && "mailto:academysolution.ng@gmail.com"
                }
                className="link-color"
              >
                academysolution.ng
              </a>
            </b>
          </div>
        </div>
        <h3 className="paddingActivate ">
          Or. Call any of our standby officials
        </h3>
        <div className="contactOfficialsDiv activateContainer paddingActivate ">
          <div>
            <p className="contactOfficialName">Osuji Favour</p>
            <p>Call: 08160650049</p>
          </div>
          <div className="contactAside">
            <p className="contactOfficialName">Chinonso</p>
            <p>Call: 08133122603</p>
          </div>
          <div>
            <p className="contactOfficialName">Darlington</p>
            <p>Call: 08061932320</p>
          </div>
          <div className="contactAside">
            <p className="contactOfficialName">Lucky</p>
            <p>Call: 07083464224</p>
          </div>
        </div>
        <div className="technicalSurpportContainer   activateContainer paddingActivate">
          <h3 className="paddingActivate ">
            Technical Support <p>Lucky: 07083464224</p>
          </h3>
          <h3 className="paddingActivate ">
            Payment Support <p>Darlingthon: 08061932320</p>
          </h3>
        </div>
        {studentData.activationSuccessful && (
          <>
            <PromptActivationSuccess
              closePrompt={() => HandleActivationPrompt("activationSuccessful")}
            />
            <Confetti />
          </>
        )}
        {studentData.activationFailed && (
          <PromptActivationFailed
            closePrompt={() => HandleActivationPrompt("activationFailed")}
          />
        )}
      </div>
    </>
  );
}

export default ActivateApp;
