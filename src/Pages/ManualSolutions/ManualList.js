import React from "react";
import { useState } from "react";
import { FaAngleRight, FaFilePdf, FaRegFilePdf } from "react-icons/fa";
import { FaSearch, FaLock } from "react-icons/fa";
import pdfData from "./pdfsData";
import { useStudentAppContext } from "../../Contexts/ContextData";
import { useNavigate } from "react-router-dom";
import PromptActivate from "../../UtilityPage/PromptActivate";

function ManualList() {
  const [pdfs, setPdfs] = useState("");
  const [checkIfManualActivated, setCheckIfManualActivated] = useState(false);
  const { studentData, setStudentData } = useStudentAppContext();
  const navigate = useNavigate();

  function HandleInputChange(e) {
    const searchText = e.target.value;
    setPdfs(searchText);
  }

  const HandlePromptActivate = () => {
    setCheckIfManualActivated(false);
  };

  const filteredArr = pdfData.filter((pdfFile) => {
    const searchTerm = pdfs.toLowerCase();
    return pdfFile.title.toLowerCase().includes(searchTerm) ? pdfFile : "";
  });

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

    return (Time = `${Month} ${Day}, ${Year}`);
  }

  function DisplayPdf(pdf) {
    if (studentData.Activated) {
      setStudentData((prev) => {
        return {
          ...prev,
          pdfFile: pdf,
        };
      });
      navigate("/PdfPage");
    } else {
      setCheckIfManualActivated(true);
    }
  }
  return (
    <>
      {filteredArr.map((pdf) => {
        // Get pdf Size
        // fetch(pdf.pdfUrl)
        //   .then((res) => {
        //     if (res.ok) {
        //       return res.blob();
        //     } else {
        //       throw new Error("Failed to fetch pdf file size");
        //     }
        //   })
        //   .then((blob) => {
        //     const sizeInBytes = blob.size;
        //     const sizeInKilobytes = Math.floor(sizeInBytes / 1024);
        //     console.log(sizeInKilobytes);
        //     return setPdfSize(sizeInKilobytes);
        //   })
        //   .catch((err) => {
        //     console.log("Error Occurred");
        //   });

        return (
          <div
            className="ManualContainerList"
            onClick={() => DisplayPdf(pdf.pdfUrl)}
          >
            <div className="ManualContainerListLeft">
              {pdf.Unit > 3 ? (
                <FaFilePdf className="ManualContainerList-icon" />
              ) : (
                <FaRegFilePdf className="ManualContainerList-icon threeunit" />
              )}

              <div className="ManualListInfo">
                <div>
                  <h3>{pdf.title} Manual</h3>
                  <p>{`${pdf.size}KB`}</p>
                </div>
                <p>{getDate()}</p>
              </div>
            </div>
            <div className="ManualIconLeft">
              <FaAngleRight className="ManualContainerList-icon2" />
              {studentData.Activated ? "" : <FaLock />}
            </div>
          </div>
        );
      })}
      {checkIfManualActivated && (
        <PromptActivate closePrompt={HandlePromptActivate} />
      )}
      <div className="Manual-Solutions-bottom flexCenter">
        <div className="Manual-Solutions-icon flexCenter">
          <FaSearch />
        </div>
        <input
          placeholder="search manual"
          onChange={HandleInputChange}
          className="Manual-Solutions-Input"
          value={pdfs}
        />
      </div>
    </>
  );
}

export default ManualList;
