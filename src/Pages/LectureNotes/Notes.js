import React, { useEffect, useState } from "react";
import "./LectureNotes.css";
import { FaArrowLeft, FaPlusCircle, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddNotePopUp from "./AddNotePopUp";
import { useStudentAppContext } from "../../Contexts/ContextData";
import NoteUnavailable from "../../UtilityPage/noteUnavailable";

function Notes(props) {
  const [openAddNote, setAddNote] = useState(false);
  const { studentData, setStudentData } = useStudentAppContext();
  const [searchItem, setSearchItem] = useState("");
  const filteredArraySearch = studentData.notePopUpData.filter((note) => {
    const searchTerm = searchItem.toLowerCase();
    return note.Title.toLowerCase().includes(searchTerm);
  });

  function setSelectedNote(noteData) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        selectedNote: noteData,
      };
    });
  }

  function UpdateNoteArray(Item) {
    setStudentData((preValue) => {
      return {
        ...preValue,
        notePopUpData: [...Item],
      };
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    const curEl =
      e.target.parentElement.parentElement.parentElement.parentElement
        .className;

    const DelData = studentData.notePopUpData.filter((el) => {
      if (!(el.key === Number(curEl))) {
        return el;
      }
    });

    UpdateNoteArray(DelData);
  }

  function handleClickOpenAddNote() {
    setAddNote((prevalue) => !prevalue);
  }

  function getNoteData(data) {
    setSelectedNote(data);
  }
  return (
    <div className="Notes-Component">
      <div className="notesTop">
        <Link to={"/LectureNotes"} className="link">
          <FaArrowLeft className="topLeftArr" />
        </Link>
        <h3 className="Notes-Component-header">All notes</h3>
        <div className="Note-component-input-cont">
          <span>
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="noteContainer">
        {studentData.notePopUpData.length === 0 ? <NoteUnavailable /> : ""}
        {filteredArraySearch.map((data, i) => {
          return (
            <div className={data.key} key={i}>
              <Link to={"/NoteLayout"} className="link">
                <div
                  className="Note-component-container"
                  onClick={() => getNoteData(data)}
                >
                  <div>
                    <h3>{data.Title}</h3>
                    <p>{data.Date}</p>
                  </div>
                  <FaTrash
                    className="note-component-Icon"
                    onClick={handleDelete}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <FaPlusCircle className="addNoteBtn" onClick={handleClickOpenAddNote} />
      <AddNotePopUp
        openAddNote={openAddNote}
        handleClickOpenAddNote={handleClickOpenAddNote}
      />
    </div>
  );
}

export default Notes;
