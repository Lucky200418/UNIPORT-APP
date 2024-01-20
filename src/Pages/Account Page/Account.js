import React, { useEffect } from "react";
import Navbar from "../../Navigation/Navbar";
import { FaAngleRight, FaEdit } from "react-icons/fa";
import "./Account.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";
import FeedbackpopUp from "./feedbackpopUp";
import ImagePopUp from "./ImagePopUp";
import { useStudentAppContext } from "../../Contexts/ContextData";
import { ToastContainer } from "react-toastify";

function AccountPage() {
  const [acc, setAcc] = useState({
    openedit: false,
    editname: "",
    editTitle: "",
    openfeedback: false,
    help: false,
    openImagePopUp: false,
    ImageSrc: "",
  });

  const { studentData, setStudentData, HandleOnlineNavigation } =
    useStudentAppContext();

  function HandleSendMessgWhatsapp(value) {
    if (navigator.onLine) {
      const whatsappLink = `https://wa.me/+2348061932320?text=${encodeURIComponent(
        value
      )}`;

      window.location.href = whatsappLink;
    } else {
      HandleOnlineNavigation();
    }
  }
  function HandlebtnClickHelpCenter() {
    setAcc((prevalue) => {
      return {
        ...prevalue,
        help: !prevalue.help,
      };
    });
  }
  function HandlebtnClickFeedback(value) {
    setAcc((prevalue) => {
      return {
        ...prevalue,
        openfeedback: !prevalue.openfeedback,
      };
    });
  }

  function HandleClickEdit(e) {
    const curName = e.target.parentElement.parentElement.firstChild.innerText;
    let curTitle =
      e.target.parentElement.parentElement.parentElement.firstChild.innerText;
    console.log(curTitle);

    setAcc((preValue) => {
      return {
        openedit: !preValue.openedit,
        editname: curName,
        editTitle: curTitle,
        id: curTitle.toLowerCase(),
      };
    });
  }

  function handleOpenImagePopUp(e) {
    setAcc((prevalue) => {
      return {
        ...prevalue,
        openImagePopUp: !prevalue.openImagePopUp,
        ImageSrc: `${e.target.src}`,
      };
    });
  }

  function handleClickSetProfileImage(e) {
    const popImageSrc =
      e.target.previousElementSibling.previousElementSibling.src;
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        profileImageSrc: popImageSrc,
      };
    });

    setAcc((prevalue) => {
      return {
        ...prevalue,
        openImagePopUp: !prevalue.openImagePopUp,
      };
    });
  }

  function setUserDetails(value) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        userdetails: {
          ...prevalue.userdetails,
          username: value,
        },
      };
    });
  }

  useEffect(() => {
    const text = studentData.userdetails.gmail;
    const start = text?.indexOf("@");
    const usernametext = text?.slice(0, start + 1);
    setUserDetails(usernametext);
  }, [studentData.userdetails.gmail]);

  return (
    <div className="acct-wrapper-container">
      <ToastContainer />
      <div className="bgColorPage"></div>
      <div className="AccountPage">
        <div className="Accs-Heading">
          <h3>
            IM<span>SU</span>
          </h3>
        </div>
        <div className="user-details accsBoard">
          <div className="user-image-div">
            <img
              className="user-image"
              src={studentData.profileImageSrc}
              alt="userpicture"
            />
          </div>
          <p className="user-name">
            {studentData.userdetails.lastname}{" "}
            {studentData.userdetails.firstname}{" "}
            {studentData.userdetails.middlename}
          </p>
          <p className="userUserName">{studentData.userdetails.username}</p>
          <div className="avatarContainer">
            <h3>Change Avatar</h3>
            <div className="avatarImageContainer">
              <img
                src="\Images\profileman2.jpg"
                alt="userpicture"
                className="profile-Image"
                onClick={handleOpenImagePopUp}
              />
              <img
                src="\Images\profileman.jpg"
                alt="userpicture"
                className="profile-Image"
                onClick={handleOpenImagePopUp}
              />
              <img
                src="\Images\profileWoman.png"
                alt="userpicture"
                className="profile-Image"
                onClick={handleOpenImagePopUp}
              />
              <img
                src="\Images\profilewoman2.png"
                alt="userpicture"
                className="profile-Image"
                onClick={handleOpenImagePopUp}
              />
            </div>
          </div>
        </div>
        <div className="edit-details accsBoard">
          <h3 className="edit-title">Edit Profile</h3>
          <div className="edit-Item">
            <div>
              <p>FirstName</p>
              <p className="aside-edit">
                {studentData.userdetails.firstname}
                <FaEdit onClick={HandleClickEdit} />
              </p>
            </div>
          </div>

          <div className="edit-Item">
            <div>
              <p>LastName</p>
              <p className="aside-edit">
                {studentData.userdetails.lastname}
                <FaEdit onClick={HandleClickEdit} />
              </p>
            </div>
          </div>

          <div className="edit-Item">
            <div>
              <p>middlename</p>
              <p className="aside-edit">
                {studentData.userdetails.middlename}
                <FaEdit onClick={HandleClickEdit} />
              </p>
            </div>
          </div>

          <div className="edit-Item">
            <div>
              <p>gmail</p>
              <p className="aside-edit">
                {studentData.userdetails.gmail}
                <FaEdit onClick={HandleClickEdit} />
              </p>
            </div>
          </div>
        </div>

        <div className="acc-settings accsBoard">
          <h3>More Settings</h3>
          <Link to={"/PushNotification"} className="link">
            <div className="settings-Item">
              <p>Push Notification</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link>

          <Link to={"/AboutUs"} className="link">
            <div className="settings-Item">
              <p>About Us</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link>

          <div className="settings-Item" onClick={HandlebtnClickFeedback}>
            <p>Feedback</p>
            <FaAngleRight className="settings-Icon" />
          </div>

          <div className="settings-Item" onClick={HandlebtnClickHelpCenter}>
            <p>Help Center</p>
            <FaAngleRight className="settings-Icon" />
          </div>

          <Link
            to={{ pathname: "/Notes", state: { from: "/AccountPage" } }}
            className="link"
          >
            <div className="settings-Item">
              <p>Saved Notes</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link>
          {/* <Link to={"/setReminders"} className="link">
            <div className="settings-Item">
              <p>Set Reminder</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link> */}

          {/* <div className="settings-Item">
            <p>App Guide</p>
            <FaAngleRight className="settings-Icon" />
          </div> */}
          <Link to={"/ActivateApp"} className="link">
            <div className="settings-Item">
              <p>Activate App</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link>
          <Link to={"/TermsConditions"} className="link">
            <div className="settings-Item">
              <p>Terms&Conditions</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </Link>
          <a
            onClick={HandleOnlineNavigation}
            href={
              navigator.onLine &&
              "https://www.instagram.com/academysolution.ng/"
            }
            className="Insta-link"
          >
            <div className="settings-Item">
              <p>Instagram</p>
              <FaAngleRight className="settings-Icon" />
            </div>
          </a>
        </div>
        <Navbar />
      </div>
      {acc.openedit ? (
        <PopUp
          holderText={acc.editname}
          title={acc.editTitle}
          HandleClick={HandleClickEdit}
          id={acc.id}
          open={setAcc}
          acc={acc}
        />
      ) : (
        ""
      )}

      <FeedbackpopUp
        open={acc.openfeedback ? acc.openfeedback : acc.help}
        handleClick={
          acc.openfeedback ? HandlebtnClickFeedback : HandlebtnClickHelpCenter
        }
        sendMessg={HandleSendMessgWhatsapp}
        toptext={
          acc.openfeedback ? "Sends Us a Feedback" : "Type and send your Issues"
        }
        descp={
          acc.openfeedback
            ? "Help us improve our user interface by sending us a feedback on your experience so far"
            : "Describes your issues and we will get back to you shortly. once again we are sorry for any unpleasant discomfort"
        }
        id={acc.openfeedback ? "Feedback" : "Helpcenter"}
      />
      <ImagePopUp
        openImagePopUp={acc.openImagePopUp}
        handleClickImagePopUp={handleOpenImagePopUp}
        ImageSrc={acc.ImageSrc}
        handleClickSetProfileImage={handleClickSetProfileImage}
      />
    </div>
  );
}

export default AccountPage;
