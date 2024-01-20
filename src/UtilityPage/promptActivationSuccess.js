function PromptActivationSuccess(props) {
  const HandleShowPrompt = () => {
    props.closePrompt(false);
  };

  return (
    <>
      <div className="activation-success promptContainer">
        <img src="\Images\success-Image.jpeg" alt="successCheckmark"></img>
        <div className="activation-success-content">
          <h3>Activation Successful</h3>
          <p>Enjoy Full Access to our Resources. Happy Learning</p>
          <button onClick={HandleShowPrompt}>Done</button>
        </div>
      </div>
      <div className="overLay"></div>
    </>
  );
}

export default PromptActivationSuccess;
