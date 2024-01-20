import { useEffect, useState } from "react";
import { useStudentAppContext } from "../../Contexts/ContextData";

function GetNotifications() {
  const [error, setError] = useState("");
  // const [notificationLength, setNotification] = useState(0)
  const { studentData, setStudentData } = useStudentAppContext();

  useEffect(() => {
    // Fetch data from the server
    fetch("https://academysolution.online/notification/get_images.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (
          studentData.notificationLength !== 0 &&
          data.length > studentData.notificationLength
        ) {
          const newNotif = data.length - studentData.notificationLength;
          setStudentData((prevValue) => {
            return {
              ...prevValue,
              notificationCount: newNotif,
              notificationLength: data.length,
            };
          });
        } else {
          setStudentData((prevValue) => {
            return {
              ...prevValue,
              notificationData: data,
              notificationLength: data.length,
            };
          });
        }
      })
      .catch((error) => {
        setError(error); // Handle errors
      });
  }, []);
}
export default GetNotifications;

// Notification Container
// const notifLength = studentData.notificationLength;
// if (notifLength.length === 2) {
//   if (notifLength[1] > notifLength[0]) {
//     const newNotif = notifLength[1] - notifLength[0];

//     setStudentData((prevValue) => {
//       return {
//         ...prevValue,
//         notificationCount: newNotif,
//         notificationLength: [notifLength[1]],
//       };
//     });
//   }
// }
// if (!(studentData.notificationData.length === data.length)) {
//   setStudentData((prevValue) => {
//     return {
//       ...prevValue,
//       notificationData: data,
//       notificationLength: [
//         ...prevValue.notificationLength,
//         data.length,
//       ],
//     };
//   });
// }
