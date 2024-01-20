import { useEffect, useState } from "react";
import { useStudentAppContext } from "../Contexts/ContextData";
import "./unavailable.css";
// import UpdateBrowserPrompt from "./UpdateBrowserPrompt";
import InstallProcessAndroid from "./InstallProcessAndroid";
import SignUp from "../Pages/IntroPageComponent/signUp";
import InstallProcessIphone from "./InstallProcessIphone";
import MainPage from "../Pages/MainPage/MainPage";

function InstallPage() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIphone] = useState(false);
  const [runInstall, setRunInstall] = useState(false);
  const [hasReloaded, setHasReloaded] = useState(false);
  const SignedIn = localStorage.getItem("IsSignedIn");

  const { setStudentData } = useStudentAppContext();

  useEffect(() => {
    if (deviceName === "Android Device") {
      setIsAndroid(true);
    }
    if (deviceName === "iPhone") {
      setIphone(true);
    }

    // Check if the browser supports PWA features
    // if ("serviceWorker" in navigator) {
    // Display an alert encouraging the user to install the PWA
    let deferredPrompt;
    // Handle the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the default prompt behavior
      event.preventDefault();
      deferredPrompt = event;
      // Handle the user's interaction with the install prompt
      const installButton = document.querySelector(".installbutton");

      installButton.addEventListener("click", () => {
        // Hide the prompt
        // installPrompt.style.display = "none";
        // Trigger the PWA installation prompt
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            setStudentData((prevalue) => {
              return {
                ...prevalue,
                install: true,
              };
            });
            console.log("User accepted the PWA installation");
          } else {
            console.log("User dismissed the PWA installation");
          }
          deferredPrompt = null; // Reset the deferredPrompt
        });
      });
    });
    // }
  }, []);

  // Reload Page automatically when page mounts
  useEffect(() => {
    const reload = localStorage.getItem("reload");
    if (reload === "undefined") {
      window.location.reload();
      localStorage.setItem("reload", false);
    }
  }, [hasReloaded]);

  // function HandlePromptIphone() {
  //   setInstallIphoneMssg(true);
  //   document.querySelector(".iphoneInstall").style.display = "none";
  //   setRunInstallIphone(true);
  // }

  // extract Os version from user agent
  function GetOsVersion(userAgent) {
    const osRegex =
      /(Android|iPhone|iPad|Windows Phone|Windows NT|Mac OS X|Linux)([^;]+)/;

    const match = userAgent.match(osRegex);
    return match ? match[2] : "Unknown";
  }

  // to device name based on Agent string
  function getDeviceName(userAgent) {
    if (/iPhone/.test(userAgent)) return "iPhone";
    if (/iPad/.test(userAgent)) return "iPad";
    if (/Android/.test(userAgent)) return "Android Device";
    if (/Windows/.test(userAgent)) return "Windows Phone";
    if (/Windows NT/.test(userAgent)) return "Windows PC";
    if (/Mac OS X/.test(userAgent)) return "Mac";
    if (/Linux/.test(userAgent)) return "Linux";
    return "Unknown Device";
  }

  function HandlePromptAndroid() {
    setRunInstall(true);
  }
  //   get user agent
  const userAgent = navigator.userAgent;

  // get os version and device name
  // const osVersion = GetOsVersion(userAgent);
  const deviceName = getDeviceName(userAgent);
  const deviceVersion = GetOsVersion(userAgent);

  return (
    <div>
      {
        isAndroid && (SignedIn ? <MainPage /> : <SignUp />)
        // <InstallProcessAndroid HandlePromptAndroid={HandlePromptAndroid} />
      }

      {isIphone && <InstallProcessIphone />}
    </div>
  );
}

export default InstallPage;
