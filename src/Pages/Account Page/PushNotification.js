import { Link } from "react-router-dom";
import { FaArrowLeft, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useStudentAppContext } from "../../Contexts/ContextData";

function PushNotification() {
  const { studentData, setStudentData } = useStudentAppContext();

  function HandleAllowNotification() {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        allowPushNotifications: !prevalue.allowPushNotifications,
      };
    });
  }

  return (
    <div className="pageContainer ">
      <div className="top-Page-header">
        <Link to={"/AccountPage"} className="link">
          <FaArrowLeft />
        </Link>
        <p>Push Notifications</p>
      </div>

      <div className="notificationTab" onClick={HandleAllowNotification}>
        <p>Allow Push Notification</p>
        {studentData.allowPushNotifications ? (
          <FaToggleOn className="push-icon allowPush" />
        ) : (
          <FaToggleOff className="push-icon" />
        )}
      </div>
    </div>
  );
}

export default PushNotification;
