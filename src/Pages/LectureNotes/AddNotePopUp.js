import { useState } from "react";
import { useStudentAppContext } from "../../Contexts/ContextData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddNotePopUp(props) {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const { setStudentData } = useStudentAppContext();

  function AddNewNote(noteContent, Title, CurDate, key) {
    setStudentData((preValue) => {
      return {
        ...preValue,
        notePopUpData: [
          ...preValue.notePopUpData,
          {
            key: key,
            noteContent: noteContent,
            Title: Title,
            Date: CurDate,
          },
        ],
      };
    });
  }
  function HandleNoteChange(noteContent) {
    setNoteContent(noteContent);
  }

  function HandleTitleChange(e) {
    const { value } = e.target;
    setNoteTitle(value);
  }

  function getDate() {
    let Time;
    const TimeStamp = new Date();
    let Day =
      TimeStamp.getDate() < 10
        ? `0${TimeStamp.getDate()}`
        : TimeStamp.getDate();
    let Month =
      TimeStamp.getMonth() < 10
        ? `0${TimeStamp.getMonth()}`
        : TimeStamp.getMonth();
    let Year =
      TimeStamp.getYear() < 10
        ? `0${TimeStamp.getYear()}`
        : TimeStamp.getFullYear();

    return (Time = `${Day}/${Month}/${Year}`);
  }
  const [showError, setShowErr] = useState(false);

  function AddNote() {
    if (noteTitle.trim() === "") {
      setShowErr(true);

      setTimeout(() => {
        setShowErr(false);
      }, 1000);
    }

    if (noteContent.trim() !== "" && noteTitle.trim() !== "") {
      const CurDate = getDate();
      let key = Date.now();
      setNoteTitle("");
      setNoteContent(`<p></p>`);
      AddNewNote(noteContent, noteTitle, CurDate, key);
      props.handleClickOpenAddNote();
    }
  }

  return (
    <div className={`notesPopUp ${props.openAddNote ? "" : "scrollDown"}`}>
      <span className="closePopup" onClick={props.handleClickOpenAddNote}>
        ⤵
      </span>

      <input
        type="text"
        value={noteTitle}
        className="notesPopUptitle"
        placeholder="Title"
        onChange={HandleTitleChange}
      />
      {showError && <p className="Empty-title">Field can not be empty</p>}
      <ReactQuill
        theme="snow"
        value={noteContent}
        onChange={HandleNoteChange}
        className="editor-Input addpopupnote"
      />
      <div className="saveNoteBtnContainer">
        <button className="saveNotebtn" onClick={AddNote}>
          Save Note
        </button>
      </div>
    </div>
  );
}
export default AddNotePopUp;
