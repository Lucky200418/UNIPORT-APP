import React, { useState, useEffect } from "react";
import "./LectureNotes.css";
import { FaArrowLeft, FaPen, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddNotePopUp from "./AddNotePopUp";
import BodyNotes from "./BodyNotes";
import { useStudentAppContext } from "../../Contexts/ContextData";

function NoteBody() {
  const [ismorenotesopen, setIsmorenotesopen] = useState(false);
  const [openmodal, setOpenmodal] = useState(false);
  const { studentData, setStudentData } = useStudentAppContext();

  function ToggleMoreNotes() {
    setIsmorenotesopen((preValue) => !preValue);
  }

  function DisplayNoteTaker() {
    setOpenmodal((preValue) => !preValue);
  }

  function SetnoteContentData(note) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        lecturenoteContent: note,
      };
    });
  }

  return (
    <div className={`NoteBody ${ismorenotesopen ? "moreNotesOpen" : ""}`}>
      <div className="NoteBody-topBar">
        <Link to={"/LectureNotes"} className="link">
          <FaArrowLeft className="notebodyLeft" />
        </Link>
      </div>
      <BodyNotes lecturenote={studentData.lecturenoteContent} />
      <div>
        <div
          className={`NoteBody-Bottom ${ismorenotesopen ? "moreTopics" : ""}`}
        >
          <div className="notebodySliderTop">
            <p onClick={ToggleMoreNotes}>Next Topic</p>
            <ul className="noteList">
              {studentData.lecturenoteContentlist?.map((note, i) => {
                return (
                  <li
                    onClick={() => {
                      if (studentData.Activated) {
                        SetnoteContentData(note.topiccontent);
                      }
                    }}
                  >
                    {note.topicname}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="notebodyIcon">
            <FaPlusCircle onClick={DisplayNoteTaker} className="notebodyplus" />
            <Link to={"/Notes"} className="link">
              <FaPen className="notebodypen" />
            </Link>
          </div>
        </div>
      </div>
      n openAddNote={openmodal}
      setOpenAddNote={setOpenmodal}
      handleClickOpenAddNote={DisplayNoteTaker}
      />
    </div>
  );
}

export default NoteBody;
