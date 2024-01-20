import { useEffect } from "react";
import { useStudentAppContext } from "../Contexts/ContextData";

function InstallProcessIphone(props) {
  const { setStudentData } = useStudentAppContext();

  useEffect(() => {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        install: true,
      };
    });
  }, []);

  function HandleInstallNavigation() {
    window.history.back();
  }
  return (
    <div className="installation-guideline-android">
      <h2 className="guideline-heading">Installation Process</h2>
      <h3 className="guideline-caution">
        Note: Do not open this download page in an incognito or private tab
      </h3>
      <ul className="guideline-list-container">
        <li>
          For Iphone Users, Please follow the image guideline specified below
        </li>
        <li>
          <img
            src="Images/IphoneMsg.jpg"
            alt="Install page guide"
            className="image-list-guide "
          />
          <img
            src="Images/iphone.jpg"
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
    </div>
  );
}

export default InstallProcessIphone;
