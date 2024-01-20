import React, { useEffect } from "react";
import "./Chat.css";
import Heading from "../../Heading/Head";
import Navbar from "../../Navigation/Navbar";
import { animated, useSpring } from "react-spring";
import { useNavigate } from "react-router-dom";

const ChatComponent = function () {
  const navigate = useNavigate();

  const style1 = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
    transition: "all 0.3s ease-in",
  });

  return (
    // <>
    //   <iframe
    //     src="https://myacademysolution.com/ChatApp"
    //     width={"100%"}
    //     className="IframeContainer"
    //   ></iframe>
    // </>
    <div className="chatwrapper">
      <div className="chatComponentContainer">
        <Heading location={"/Main"} />
        <animated.div style={{ ...style1 }}>
          <p className="bouncing-text">
            Sorry Our ChatRoom is <b>not avialable</b>
            <br /> now please <b>stay updated </b>
            <br /> for future <b>Updates</b>
          </p>
        </animated.div>
        <Navbar />
      </div>
    </div>
  );
};

export default ChatComponent;
