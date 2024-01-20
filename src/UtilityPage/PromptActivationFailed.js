import "./unavailable.css";

function PromptActivationFailed(props) {
  const HandleShowPrompt = () => {
    props.closePrompt(false);
  };
  return (
    <>
      <div className="activation-success promptContainer">
        <img src="\Images\error-Image.jpg" alt="successCheckmark"></img>
        <div className="activation-success-content">
          <h3>Error Occurred</h3>
          <p>Oops. Seems like you ran into an error. </p>
          <button onClick={HandleShowPrompt}>Done</button>
        </div>
      </div>
      <div className="overLay"></div>
    </>
  );
}

export default PromptActivationFailed;
