import { Link } from "react-router-dom";
function PromptActivate(props) {
  return (
    <>
      <div className="promptContainer">
        <div className="promptImage"></div>
        <div className="promptContainer">
          <h2>Activate App</h2>
          <p>
            Activate app to get full access to Lecture Notes and Past questions
          </p>
          <Link to={"/ActivateApp"} className="link">
            <button>Activate</button>
          </Link>
        </div>
        <div className="promptClose" onClick={props.closePrompt}>
          X
        </div>
      </div>
      <div className="overLay"></div>
    </>
  );
}

export default PromptActivate;
