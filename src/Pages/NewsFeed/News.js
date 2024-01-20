import React, { useEffect } from "react";
import "./News.css";
import Navbar from "../../Navigation/Navbar";
import NotifcationsContainer from "./NotificationLayout";
// import { animated, useSpring } from "react-spring";
import { useStudentAppContext } from "../../Contexts/ContextData";
import { FaBell, FaChartBar } from "react-icons/fa";

const NewsFeedComponent = function () {
  const { studentData } = useStudentAppContext();

  // const style1 = useSpring({
  //   from: { transform: "translateY(-100%)" },
  //   to: { transform: "translateY(0%)" },
  //   transition: "all 0.3s ease-in",
  // });

  useEffect(() => {
    const lastNotification =
      document.querySelector(".NotificationBox")?.lastElementChild;
    lastNotification.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="newswrapper">
        <div className="newsComponentContainer">
          <FaChartBar className="BarIcon" />
          <div className="notification-heading">
            <h2>Notifications</h2>
            <span className="bellBackground">
              <FaBell className="bellIcon" />
              <span className="notificationCount">
                {studentData.notificationData.length}
              </span>
            </span>
          </div>
          <div className="NotificationBox">
            {studentData.notificationData.length > 0 ? (
              studentData.notificationData.map((notification) => {
                return <NotifcationsContainer data={notification} />;
              })
            ) : (
              <div className="OfflineContainer">
                <img
                  src="/Images/Going offline-bro.png"
                  alt="Image"
                  className="OfflineImage"
                />
                <p>Your are Currently Offline</p>
              </div>
            )}
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default NewsFeedComponent;

{
  /* <animated.div style={style1}>
            <p className="bouncing-text">
              Sorry Our NewsRoom is <b>not avialable</b>
              <br /> now please <b>stay updated </b>
              <br /> for future <b>Updates</b>
            </p>
          </animated.div> */
}
