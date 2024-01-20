import UpdateBrowserPrompt from "./UpdateBrowserPrompt";
import { useEffect, useState } from "react";
function InstallProcessAndroid(props) {
  const [browserUpdated, setBrowserUpdate] = useState(false);
  // Check if the user is using Chrome
  useEffect(() => {
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
      const chromeVersion = parseInt(
        navigator.userAgent.match(/Chrome\/(\d+)/)[1],
        10
      );

      // You can define a minimum version you consider up-to-date
      const minSupportedVersion = 114; // Update this to your preferred minimum version

      if (chromeVersion < minSupportedVersion) {
        setBrowserUpdate(true);
        // Display a message or prompt the user to update
        // alert(
        //   "Your Chrome browser is outdated. Please update to the latest version for the best experience."
        // );
      }
    }
  }, []);

  function HandleClose() {
    setBrowserUpdate(false);
  }

  function HandleInstallNavigation() {
    window.history.back();
  }

  return (
    <div className="installation-guideline-android">
      <h2 className="guideline-heading">Installation Process</h2>
      <h3 className="guideline-caution">
        Note: Do not open this download page in an incognito or private tab
      </h3>
      <h3 className="guideline-list-heading">Requirements</h3>
      <ul className="guideline-list-container">
        <li>Please Make sure you are using chrome for this download</li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.android.chrome">
            Click here
          </a>{" "}
          to download chrome if you do not have it installed
        </li>
        <li>
          If you have chrome already. Please make sure that it is an updated
          version of chrome
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.android.chrome">
            Click here
          </a>{" "}
          to update your chrome to the latest version
        </li>
        <li>
          If the requirements are meet in the previous steps click the install
          button below to install
        </li>
        <li>
          <button
            className="installbutton guideline-list-btn "
            onClick={props.HandlePromptAndroid}
          >
            Install
          </button>
        </li>
        <li>OR you can follow this image guide</li>
        <li>
          <img
            src="Images/android guide.jpg"
            alt="Install page guide"
            className="image-list-guide "
          />
        </li>
        <li>
          <h2 className="guideline-heading ">After Installation</h2>
          <p className="guideline-caution" style={{ fontSize: "2.4rem" }}>
            Note: Only after you have installed the app
          </p>
          <p>
            This is for only when you have finished installing the application
            and the app icon appears on your phone screen
          </p>
        </li>
        <li>
          If you still see this installation page after installing the app.(When
          you open the app from the app icon)
        </li>
        <li>
          <button
            onClick={HandleInstallNavigation}
            className="guideline-list-btn"
          >
            click here{" "}
          </button>
          to Navigate back to first page and start using the app
        </li>
      </ul>
      {browserUpdated ? <UpdateBrowserPrompt HandleClose={HandleClose} /> : ""}
    </div>
  );
}

export default InstallProcessAndroid;
