import { useEffect, useRef } from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useStudentAppContext } from "../../Contexts/ContextData";

function BodyNotes({ lecturenote }) {
  const editorRef = useRef(null);
  const { studentData, setStudentData } = useStudentAppContext();

  function setHighlightTextIntialContent(content) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        highlightTextIntialContent: content,
      };
    });
  }

  function setUnHighlightTextIntialContent(content) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        unhighlightTextIntialContent: [
          ...prevalue.unhighlightTextIntialContent,
          content,
        ],
      };
    });
  }

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        readOnly: true,
        theme: "snow",
        modules: {
          toolbar: false,
        },
      });

      const deltastudentNote = quill.clipboard.convert(
        studentData.lecturenoteContent
      );

      const HighlightModule = {
        handleSelection(event) {
          setUnHighlightTextIntialContent(
            editorRef.current.quillInstance.getContents()
          );
          const range = quill.getSelection();
          if (range && range.length > 0) {
            quill.formatText(range.index, range.length, "background", "yellow");
          }
        },
      };

      editorRef.current.quillInstance = quill;

      quill.root.addEventListener("mouseup", HighlightModule.handleSelection);

      // setHighlightTextIntialContent(quill.getContents());

      const data = JSON.parse(localStorage.getItem("studentData"));

      const highlightArr = data.unhighlightTextIntialContent.length;

      if (deltastudentNote) {
        quill.setContents(deltastudentNote);
      } else if (highlightArr > 0 && data.highlightTextIntialContent === "") {
        quill.setContents(data.unhighlightTextIntialContent[0]);
      } else if (data.highlightTextIntialContent) {
        quill.setContents(data.highlightTextIntialContent);
      }
      return () => {
        quill.root.removeEventListener(
          "mouseup",
          HighlightModule.handleSelection
        );
      };
    }
  }, [studentData.lecturenoteContent]);

  function saveHighlightChanges() {
    const quillInstance = editorRef.current.quillInstance;
    const content = quillInstance.getContents();

    setHighlightTextIntialContent(content);

    studentData.highlightTextIntialContent = "";
  }

  function undoHighlighting() {
    const highlightArr = studentData.unhighlightTextIntialContent.length;

    if (highlightArr > 0) {
      const quillInstance = editorRef.current.quillInstance;
      quillInstance.setContents(
        studentData.unhighlightTextIntialContent[highlightArr - 1]
      );
      studentData.unhighlightTextIntialContent.pop();
    }
  }

  return (
    <div>
      <div className="BodyNotesBottom">
        {/* <button className="saveNotebtn" onClick={saveHighlightChanges}>
          Save Changes
        </button>
        <button className="saveNotebtn" onClick={undoHighlighting}>
          UndoHighlights
        </button> */}
      </div>
      <div ref={editorRef}></div>
    </div>
  );
}

export default BodyNotes;
