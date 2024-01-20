import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Navigation/Navbar";
import "./MainPage.css";
import ComponentLayout from "./ComponentLayout";
import RiddleComponent from "./Riddle";
import PromptActivate from "../../UtilityPage/PromptActivate";
import { useStudentAppContext } from "../../Contexts/ContextData";
import GetNotifications from "../NewsFeed/GetNewsData";

const MainPage = function (props) {
  const { studentData } = useStudentAppContext();
  const [promptUserActivate, setPromptActivate] = useState();

  // Animation States
  const [renderComponent1, setRenderComponent1] = useState(false);
  const [renderComponent2, setRenderComponent2] = useState(false);
  const [renderComponent3, setRenderComponent3] = useState(false);
  const [renderComponent4, setRenderComponent4] = useState(false);
  const [renderComponent5, setRenderComponent5] = useState(false);
  const [renderComponent6, setRenderComponent6] = useState(false);

  useEffect(() => {
    if (studentData.Activated) {
      localStorage.setItem("activated", true);
    } else {
      localStorage.setItem("activated", false);
    }
  }, []);

  const HandlePromptActivate = () => {
    setPromptActivate(false);
  };

  const handleRenderComponents = () => {
    setRenderComponent1(true);
    setTimeout(() => {
      setRenderComponent2(true);
    }, 50);
    setTimeout(() => {
      setRenderComponent3(true);
    }, 100);
    setTimeout(() => {
      setRenderComponent4(true);
    }, 150);
    setTimeout(() => {
      setRenderComponent5(true);
    }, 200);
    setTimeout(() => {
      setRenderComponent6(true);
    }, 250);
  };

  useEffect(() => {
    // Check  if student is activated
    if (studentData.Activated) {
      setPromptActivate(false);
    } else {
      setPromptActivate(true);
    }
    handleRenderComponents();
  }, []);

  return (
    <>
      <div className="MainLayout">
        <GetNotifications />
        <div className="wrapper">
          <div className="containerLayout">
            <section className="Top-Section">
              <div className="TopBar">
                <Link to={"/"} className="link">
                  <FaArrowLeft />
                </Link>
                <FaSun />
              </div>
              <div className="profileContainer">
                <img
                  src={studentData.profileImageSrc}
                  alt="userpictureImage"
                  className="profile-Image"
                />
                <div className="Welcome-text">
                  <p>
                    Welc<bold className="intro-W">ome</bold>
                  </p>
                  <p className="intro-L">{studentData.userdetails.firstname}</p>{" "}
                </div>
              </div>
              <div className="riddleContainer">
                <p>
                  UNIPORT <span className="mid-text">Student Learning</span>{" "}
                  Application
                </p>
                <p className="intro-text">
                  A learning{" "}
                  <span className="mid-text">application that contains </span>{" "}
                  necessary resources for smoother experience{" "}
                  <span className="mid-text">in your academic</span> endeavours
                </p>
                <RiddleComponent />
              </div>
              <p className="explore">Explore here</p>
            </section>
          </div>
        </div>
        <div className="layoutWrapper">
          {renderComponent1 && (
            <ComponentLayout
              title="Lectures Notes"
              detail1="Study LectureNotes"
              detail2="Review Notes Various Courses"
              address="/LectureNotes"
            />
          )}

          {renderComponent2 && (
            <ComponentLayout
              title="Study-past-questions"
              detail1="Review PastQuestions"
              detail2="10+ courses Compiled pastQuestion"
              address="/pass question++/pass question++/index.html"
            />
          )}
          {renderComponent3 && (
            <ComponentLayout
              title="CBT-Practice"
              detail1="Practice CBT"
              detail2="Put Your Kowledge to the Test"
              // address="/cbt/index.html"
              address="/CbtPage"
            />
          )}
          {renderComponent4 && (
            <ComponentLayout
              title="GPA Calculator"
              detail1="Calculate GPA && CGPA"
              detail2="InBuilt GP Calculator"
              address="/MainCalculator"
            />
          )}
          {renderComponent5 && (
            <ComponentLayout
              title="Activate App"
              detail1="Activate to have full Control"
              detail2="One time Activation"
              address="/ActivateApp"
            />
          )}
          {renderComponent6 && (
            <ComponentLayout
              title="Manual Solutions"
              detail1="Access manual answers on various courses"
              detail2="Multiple Manual solutions"
              address="/ManualPage"
            />
          )}
        </div>
      </div>
      <Navbar path={props.path} />
      {promptUserActivate && (
        <PromptActivate closePrompt={HandlePromptActivate} />
      )}
    </>
  );
};

export default MainPage;
