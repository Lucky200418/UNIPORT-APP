import React, { useRef } from "react";
import { FaArrowLeft, FaShare } from "react-icons/fa";
import "./LectureNotes.css";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useStudentAppContext } from "../../Contexts/ContextData";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "speech"],
    [{ background: [] }],
  ],
};

function NoteLayout() {
  const { studentData, setStudentData } = useStudentAppContext();
  const quillRef = useRef(null);

  function setUpdatedNotes(UpdatedNotes) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        notePopUpData: [...UpdatedNotes],
      };
    });
  }

  function updateSelectedNote(content) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        selectedNote: { ...prevalue.selectedNote, noteContent: content },
      };
    });
  }

  function UpdateSavedNotes() {
    const UpdatedNotes = studentData.notePopUpData.map((note) =>
      note.key === studentData.selectedNote.key
        ? studentData.selectedNote
        : note
    );

    setUpdatedNotes(UpdatedNotes);
  }

  function DownloadTextFile() {
    if (quillRef.current) {
      const quillInstance = quillRef.current.getEditor();
      const plainTextContent = quillInstance.getText();
      const blob = new Blob([plainTextContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "note.txt";
      link.click();
    }
  }
  const captureQuillAsImage = async () => {
    try {
      if (quillRef.current) {
        const quillElement = quillRef.current.editor.root;
        const canvas = await html2canvas(quillElement);
        const imageBlob = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageBlob;
        link.download = "note_image.png";
        link.click();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ShareButton = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: studentData.selectedNote.noteContent,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error Sharing");
      }
    } else {
      console.log("web share api not surported");
    }
  };

  return (
    <div className="notesPopUp noteLayout ">
      <div className="noteLayoutTop flexSpaceBtwn notecont">
        <div className="noteLayoutTopaside flexSpaceBtwn">
          <Link to={"/Notes"} className="link">
            <FaArrowLeft onClick={() => UpdateSavedNotes()} />
          </Link>
          <span>Notes</span>
        </div>
        <FaShare onClick={ShareButton} />
      </div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={
          studentData.selectedNote ? studentData.selectedNote.noteContent : ""
        }
        onChange={(content) => {
          updateSelectedNote(content);
        }}
        className="editor-Input"
        modules={modules}
      />

      <div className="noteLayoutBottomBtn">
        <button className="saveNotebtn" onClick={DownloadTextFile}>
          Download NoteText
        </button>
        {/* <button className="saveNotebtn" onClick={UpdateSavedNotes}>
          Update Note
        </button> */}
        <button className="saveNotebtn" onClick={captureQuillAsImage}>
          Download NoteImage
        </button>
      </div>
    </div>
  );
}
export default NoteLayout;
