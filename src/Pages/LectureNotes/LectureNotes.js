import React from "react";
import { useEffect, useState } from "react";
import "./LectureNotes.css";
import { FaArrowLeft, FaSun, FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseLayout from "./CourseLayout";
import PromptActivate from "../../UtilityPage/PromptActivate";
import { useStudentAppContext } from "../../Contexts/ContextData";
import noteContentData from "./noteData";

function LectureNotes() {
  const [promptUserActivate, setPromptActivate] = useState();
  const [searchNote, setSearchNote] = useState("");
  const { studentData } = useStudentAppContext();

  // Close Prompt Activate
  function HandlePromptActivate() {
    setPromptActivate(false);
  }
  const filteredArray = noteContentData.filter((data) => {
    const searchTerm = searchNote.toLowerCase();
    const dataItem = data.title.toLowerCase();
    return dataItem.includes(searchTerm) ? data : "";
  });
  useEffect(() => {
    // Check  if student is activated
    if (studentData.Activated) {
      setPromptActivate(false);
    } else {
      setPromptActivate(true);
    }
  }, []);

  return (
    <div className="NotesWrapper">
      <div className="NotesContainer">
        <div className="NotesTopBar">
          <Link to={"/Main"} className="link">
            <FaArrowLeft />
          </Link>
          <FaSun />
        </div>
        <div className="MidBar">
          <button>Read</button>
          <h2>
            Students <br /> <span>Library Docs</span>
          </h2>
          <p>
            Accurate compiled and summarized
            <br />
            Notes on all courses
          </p>
        </div>

        <div className="thirdBar">
          <div className="star-container">
            <FaStar className="star-Note" />
            <FaStar className="star-Note" />
            <FaStar className="star-Note" />
            <FaStar className="star-Note" />
            <FaStar className="star-Note" />
          </div>
          <Link to={"/Notes"} className="link">
            <button className="note-btn">Take Notes</button>
          </Link>
        </div>

        <div className="NotesSection">
          <div className="courselayoutTop">
            <p>
              Get access to up to date lecture notes for students on all courses
              Be well equiped with knowledge for upcoming exams and test to pass
              in flying colors
            </p>
            <div className="searchNoteContainer">
              <input
                placeholder="Search Note"
                onChange={(e) => setSearchNote(e.target.value)}
                value={searchNote}
              />
              <div className="searchNoteIcon">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="courseLayout">
            {filteredArray.map((note) => {
              return <CourseLayout title={`${note.title}`} />;
            })}
          </div>
        </div>
      </div>
      {promptUserActivate && (
        <PromptActivate closePrompt={HandlePromptActivate} />
      )}
    </div>
  );
}
//
export default LectureNotes;

// {
