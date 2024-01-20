import { useEffect, useState } from "react";
import "./MainPage.css";
import {
  FaArrowRight,
  FaArrowLeft,
  FaMinus,
  FaPlusCircle,
} from "react-icons/fa";
import { useStudentAppContext } from "../../Contexts/ContextData";
import RiddleData from "./RiddleData";

const RiddleComponent = function () {
  const [isopenquote, setIsopenquote] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const [curRiddle, setCurRiddle] = useState([]);
  const { studentData, setStudentData } = useStudentAppContext();

  function ToggleQuotes() {
    setIsopenquote((preValue) => !preValue);
  }

  function ToggleAnswers() {
    setShowAns((prevalue) => !prevalue);
  }

  useEffect(() => {
    let num = 0;
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        riddle: { ...RiddleData[num] },
        previousriddle: [num],
      };
    });
    num++;
  }, []);

  function ToggleRightRiddles() {
    let num = Math.floor(Math.random() * 80);
    setShowAns((prevalue) => false);
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        riddle: RiddleData[num],
      };
    });

    setCurRiddle((prevalue) => {
      return [...prevalue, num];
    });
  }

  let riddlecount = 2;
  function ToggleLeftRiddles() {
    const lastRiddle = curRiddle.length - riddlecount;

    if (curRiddle.length > 1) {
      setShowAns((prevalue) => false);
      setStudentData((prevalue) => {
        return {
          ...prevalue,
          riddle: RiddleData[curRiddle[lastRiddle]],
        };
      });
    }
    riddlecount++;

    console.log(curRiddle);
    console.log(RiddleData[curRiddle[lastRiddle]]);
    console.log(curRiddle.length, "curRiddle.length");
    console.log(lastRiddle, "curRiddle.length - riddlecount");
    console.log(riddlecount, "riddleCount");
  }

  return (
    <div className="riddle-day">
      <div className="top-Head-riddle">
        <h3>~~ Riddle of the day ~~</h3>
        {isopenquote ? (
          <FaMinus className="top-Head-riddle-icon" onClick={ToggleQuotes} />
        ) : (
          <FaPlusCircle
            className="top-Head-riddle-icon"
            onClick={ToggleQuotes}
          />
        )}
      </div>

      {isopenquote ? (
        <div className="riddle">
          <h4>{studentData.riddle?.title}</h4>
          <p className="riddle-text">{studentData.riddle?.question}</p>
          <div className="riddle-bottom">
            <button className="riddle-btn" onClick={ToggleAnswers}>
              {showAns ? "Hide Answer" : "show Answer"}
            </button>
            <div>
              <FaArrowLeft className="arrRight" onClick={ToggleLeftRiddles} />
              <FaArrowRight className="arrRight" onClick={ToggleRightRiddles} />
            </div>
          </div>
          {showAns ? (
            <p className="riddle-answers">{studentData.riddle?.answer}</p>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RiddleComponent;
