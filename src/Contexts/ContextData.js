import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const StudentAppContext = createContext();

export function useStudentAppContext() {
  return useContext(StudentAppContext);
}

export function StudentAppProvider({ children }) {
  const [studentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem("studentData")) || {
      notePopUpData: [],
      selectedNote: null,
      highlightTextIntialContent: null,
      unhighlightTextIntialContent: [],
      profileImageSrc: "/Images/profileman.jpg",
      userdetails: {
        firstname: "",
        lastname: "",
        middlename: "",
        gmail: "",
        agreeTermsConditions: "",
        username: "",
      },
      allowPushNotifications: false,
      notificationData: [],
      notificationCount: 0,
      notificationLength: 0,
      riddle: {},
      pdfFile: "",
      previousriddle: [],
      lecturenoteContentlist: [],
      lecturenoteContent: "",
      isOnline: false,
      activationSuccessful: false,
      activationFailed: false,
      Activated: false,
      install: false,
      gpaArray:[],
      gpaArray1:[],
      gpaArray2: [],
      currentLevel: "",
      semester: 1,
      savedGpaArr: [{
        level: 100,
        firstSemester: {
          gpa:["0.00"],
          id: [0],
          results: []
        },
        secondSemester: {
          id: [0],
          gpa: ["0.00"],
          results: []
        }
      }]
    }
  );

  // Update Local Storage anytime state changes
  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(studentData));
  }, [studentData]);

  // load stored state from local storage
  useEffect(() => {
    const storedState = localStorage.getItem("studentData");
    const storedData = JSON.parse(storedState);
    if (storedData) {
      setStudentData(storedData);
    }
  }, []);

  // Check if the user is online or not
  function HandleOnlineNavigation() {
    if (navigator.onLine) {
      setStudentData((prevalue) => {
        return {
          ...prevalue,
          isOnline: true,
        };
      });
    } else {
      toast.success("You are currently Offline", {
        style: {
          fontSize: "2rem",
        },
      });
    }
  }

  return (
    <StudentAppContext.Provider
      value={{ studentData, setStudentData, HandleOnlineNavigation }}
    >
      {children}
    </StudentAppContext.Provider>
  );
}

export default StudentAppContext;
