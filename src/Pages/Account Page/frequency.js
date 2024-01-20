import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Settings.css";

function Frequency() {
  return (
    <div className="frequencyContainer">
      <div className="top-Page-header ">
        <Link to={"/setReminders"} className="link">
          <FaArrowLeft />
        </Link>
        <p>Frequency</p>
      </div>

      <div className="day-Container">
        <p>Day</p>
        <div className="daysOfWeek">
          <div className="daysOfWeekCont">
            <p>Sunday</p>
            <FaCheck className="frequency-icon" />
          </div>
          <div className="daysOfWeekCont">
            <p>Monday</p>
            <FaCheck className="frequency-icon" />
          </div>

          <div className="daysOfWeekCont">
            <p>Tuesday</p>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="daysOfWeekCont">
            <p>wednesday</p>
            <FaCheck className="frequency-icon" />
          </div>

          <div className="daysOfWeekCont">
            <p>Thursday</p>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="daysOfWeekCont">
            <p>Friday</p>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="daysOfWeekCont">
            <p>Staurday</p>
            <FaCheck className="frequency-icon" />
          </div>
        </div>

        <div className="TimeContainer">
          <p>Time</p>
          <div className="timesOfday">
            <div>
              <p>Morning</p>
              <p>6:00 AM</p>
            </div>
            <FaCheck className="frequency-icon" />
          </div>

          <div className="timesOfday">
            <div>
              <p>Mid-Morning</p>
              <p>9:00 AM</p>
            </div>
            <FaCheck className="frequency-icon" />
          </div>

          <div className="timesOfday">
            <div>
              <p>Noon</p>
              <p>6:00 AM</p>
            </div>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="timesOfday">
            <div>
              <p>Afternoon</p>
              <p>6:00 AM</p>
            </div>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="timesOfday">
            <div>
              <p>Evening</p>
              <p>6:00 AM</p>
            </div>
            {/* <FaCheck className="frequency-icon" /> */}
          </div>

          <div className="timesOfday">
            <div>
              <p>Night</p>
              <p>9:00 PM</p>
            </div>
            <FaCheck className="frequency-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frequency;
