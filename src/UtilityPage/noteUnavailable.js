import "./unavailable.css";

function NoteUnavailable() {
  return (
    <div className="noteUnavailableContainer">
      <img src="/Images/note-Empty.gif" alt="ImageUnavialable" />
      <p>
        !OOps Sorry <br />
        it seems{" "}
        <span>
          you have no
          <br /> saved
        </span>{" "}
        note avialable
      </p>
    </div>
  );
}

export default NoteUnavailable;
