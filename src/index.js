import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import reportWebVitals from './reportWebVitals';

// COMPONENTS
import IntroPage from "./Pages/IntroPageComponent/IntroPage";
import MainPage from "./Pages/MainPage/MainPage";
import ChatComponent from "./Pages/ChatRoom.js/Chat";
import NewsFeedComponent from "./Pages/NewsFeed/News";
import LectureNotes from "./Pages/LectureNotes/LectureNotes";
import NoteBody from "./Pages/LectureNotes/NoteBody";
import Notes from "./Pages/LectureNotes/Notes";
import SignUp from "./Pages/IntroPageComponent/signUp";
import Login from "./Pages/IntroPageComponent/Login";
import Account from "./Pages/Account Page/Account";
import SetReminder from "./Pages/Account Page/setReminder";
import Frequency from "./Pages/Account Page/frequency";
import PushNotification from "./Pages/Account Page/PushNotification";
import AboutUs from "./Pages/Account Page/AboutUs";
import ActivateApp from "./Pages/Account Page/ActivateApp";
import TermsConditions from "./Pages/Account Page/Terms&Conditions";
import AddNotePopUp from "./Pages/LectureNotes/AddNotePopUp";
import NoteLayout from "./Pages/LectureNotes/NoteLayout";
import { StudentAppProvider } from "./Contexts/ContextData";
import MainCalculator from "./Pages/GPA Calculator/mainCalculator";
import InstallPage from "./UtilityPage/installPage";
import Cbt from "./Pages/Cbt/Cbt";
// import UpdateBrowserPrompt from "./UtilityPage/UpdateBrowserPrompt";
import PdF from "./Pages/ManualSolutions/PdfViewer";
import ResultPage from "./Pages/GPA Calculator/Results";
import ManualPage from "./Pages/ManualSolutions/ManualPage";
import swDev from "./swDev";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/Main",
    element: <MainPage />,
  },
  {
    path: "/Chat",
    element: <ChatComponent />,
  },

  {
    path: "/NewsFeed",
    element: <NewsFeedComponent />,
  },
  {
    path: "/LectureNotes",
    element: <LectureNotes />,
  },

  {
    path: "/NoteBody",
    element: <NoteBody />,
  },

  {
    path: "/Notes",
    element: <Notes />,
  },
  {
    path: "/signUpPage",
    element: <SignUp />,
  },
  {
    path: "/AccountPage",
    element: <Account />,
  },
  {
    path: "/LoginPage",
    element: <Login />,
  },
  {
    path: "/setReminders",
    element: <SetReminder />,
  },
  {
    path: "/frequency",
    element: <Frequency />,
  },
  {
    path: "/PushNotification",
    element: <PushNotification />,
  },

  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/ActivateApp",
    element: <ActivateApp />,
  },
  {
    path: "/TermsConditions",
    element: <TermsConditions />,
  },
  {
    path: "/AddNotePopUp",
    element: <AddNotePopUp />,
  },
  {
    path: "/NoteLayout",
    element: <NoteLayout />,
  },
  {
    path: "/MainCalculator",
    element: <MainCalculator />,
  },
  {
    path: "/InstallPage",
    element: <InstallPage />,
  },
  {
    path: "/ManualPage",
    element: <ManualPage />,
  },
  {
    path: "/PdfPage",
    element: <PdF />,
  },
  {
    path: "/CbtPage",
    element: <Cbt />,
  },
  {
    path: "/ResultPage",
    element: <ResultPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <StudentAppProvider>
    <RouterProvider router={router} />
  </StudentAppProvider>
  // </React.StrictMode>
);
swDev();
