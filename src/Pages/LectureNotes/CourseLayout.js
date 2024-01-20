import React from "react";
import { useState } from "react";
import "./LectureNotes.css";
import { FaPlusCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import noteContentData from "./noteData";
import PromptActivate from "../../UtilityPage/PromptActivate";
import { useStudentAppContext } from "../../Contexts/ContextData";

function CourseLayout(props) {
  const [isopen, setIsOpen] = useState(false);
  const { studentData, setStudentData } = useStudentAppContext();
  const [displayActivate, setDisplayActivate] = useState(false);

  // Close Prompt Activate
  function HandlePromptActivate() {
    setDisplayActivate(false);
  }

  const courseTopicData = noteContentData.find((note) => {
    return note.title === props.title && note;
  });

  function DisplayNotes() {
    setIsOpen((isopen) => {
      return !isopen;
    });
  }

  function getNoteContent(content, i) {
    if (studentData.Activated || i === 0) {
      setStudentData((prevalue) => {
        return {
          ...prevalue,
          lecturenoteContent: content,
          lecturenoteContentlist: [...courseTopicData.topics],
        };
      });
    }
    setDisplayActivate(true);
  }

  return (
    <div className="Notes">
      <div
        className={`Notes-Heading ${isopen ? "open" : ""}`}
        onClick={DisplayNotes}
      >
        <h3>{props.title}</h3>
        {isopen ? (
          <span>-</span>
        ) : (
          <div>
            <FaPlusCircle className={`Notes-Heading-icon plus`} />
            {!studentData.Activated && <FaLock className="topic-lock-Icon" />}
          </div>
        )}
      </div>
      {isopen ? (
        <section className="Topics">
          <h4>Topics</h4>
          <ul className="topic-name">
            <>
              {courseTopicData?.topics.map((topic, i) => {
                return (
                  <Link
                    key={i}
                    to={studentData.Activated || i === 0 ? "/NoteBody" : ""}
                    className="link"
                  >
                    <li onClick={() => getNoteContent(topic.topiccontent, i)}>
                      {topic.topicname}
                    </li>
                  </Link>
                );
              })}
            </>
          </ul>
          {displayActivate && (
            <PromptActivate closePrompt={HandlePromptActivate} />
          )}
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default CourseLayout;
