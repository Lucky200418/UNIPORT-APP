function ImagePopUp(props) {
  return (
    <>
      {props.openImagePopUp ? (
        <div className="imagePopUpContainer">
          <img
            src={`${props.ImageSrc}`}
            alt="user-picture"
            className="popUp-Image"
          />
          <span onClick={props.handleClickImagePopUp}>X</span>
          <button onClick={props.handleClickSetProfileImage}>set</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ImagePopUp;
