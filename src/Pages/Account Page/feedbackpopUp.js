import { useState } from "react";

function FeedbackpopUp(props) {
  const [textAreaValue, setTextAreaValue] = useState("");

  function HandleSubmitFeedback() {
    setTextAreaValue("");
    props.handleClick();
    props.sendMessg(textAreaValue);
  }

  return (
    <>
      {props.open ? (
        <div>
          <div className="popUpContainer feedback">
            <span onClick={props.handleClick}>X</span>
            <div className="popUp-content">
              <p>{props.toptext}</p>
              <p>{props.descp}</p>
              <textarea
                type="text"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                placeholder="send us your feedback"
              />
              <button onClick={HandleSubmitFeedback}>Send</button>
            </div>
          </div>
          <div className="overLay"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FeedbackpopUp;
