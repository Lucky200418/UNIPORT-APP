function UpdateBrowserPrompt(props) {
  return (
    <div className="promptContainer updateBrowerPrompt FlexCol">
      <span className="closeUpdatePrompt" onClick={props.HandleClose}>
        X
      </span>
      <img
        src="/backgroundImage-2.jpeg"
        className="promptImage"
        // alt="backgroundImage"
      />
      <div className="updateBrowerPromptInfo">
        <span>Please Update your browser in order to install</span>
        <p>
          if you are using chrome <br />
          please click the button to update browser
        </p>
      </div>
      <a href="https://play.google.com/store/apps/details?id=com.android.chrome">
        <button>Update Browser</button>
      </a>
    </div>
  );
}

export default UpdateBrowserPrompt;
