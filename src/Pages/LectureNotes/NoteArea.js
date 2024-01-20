import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useContext } from "react";
import StudentAppContext from "../../Contexts/ContextData";

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
  ],
};

function NoteArea() {
  const { studentData } = useContext(StudentAppContext);

  const curNote = studentData.notePopUpData.find((Item) => {
    if (Item.key === studentData.NotesPopUpData) {
      return Item;
    }
  });

  const [value, setValue] = useState(curNote.noteContent);

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="editor-Input"
        modules={modules}
      />
    </>
  );
}
export default NoteArea;
