import "./Settings.css";
import {
  FaToggleOn,
  FaToggleOff,
  FaAngleLeft,
  FaArrowLeft,
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function SetReminder() {
  return (
    <div className="pageContainer ">
      <div className="top-Page-header">
        <Link to={"/AccountPage"} className="link">
          <FaArrowLeft />
        </Link>
        <p>Learning Reminders</p>
      </div>
      <p className="reminder-text">
        Set a learning reminder to help you meet your goals faster. You can
        change the frequency or turn them off in your account settings at any
        time
      </p>

      {/* <div className="setReminderToggle">
        <p>Learning reminders</p>
        <FaToggleOff className="reminder-icon" />
      </div> */}
      <Link to={"/frequency"} className="link">
        <div className="frequency-tab">
          <p>Frequency</p>
          <FaAngleRight className="reminder-icon" />
        </div>
      </Link>
    </div>
  );
}

export default SetReminder;
