//
import React from "react";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Document, Page, pdfjs } from "react-pdf";
import { useStudentAppContext } from "../../Contexts/ContextData";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdF() {
  let arr = [];
  const [numPages, setnumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomIndex, SetZoomIndex] = useState(1);
  const { studentData } = useStudentAppContext();

  let pdfFile = studentData.pdfFile;

  function onDocumentSuccess(info) {
    setnumPages(info.numPages);
  }

  function onDocumentLoad(load) {
    arr.push(load);
    if (arr.length === 1) {
      toast.success("Loading Pdf File. Please Wait...", {
        style: {
          fontSize: "2rem",
          Width: "80%",
          marginLeft: "-2rem",
        },
      });
    }
  }

  function onDocumentError(error) {
    if (error.message.includes("Invalid")) {
      console.log("Error loading PDF:", error.message);
    }

    toast.success(
      "Pdf Failed to Load. Please turn on data connection to load pdf for the first time ",
      {
        style: {
          fontSize: "2rem",
          Width: "80%",
          marginLeft: "-2rem",
        },
      }
    );
  }
  function NextPage() {
    setPageNumber((prev) => {
      if (prev < numPages) {
        document.querySelector(".pdfNextPage").style.translateX = "100%";
        return (prev += 1);
      } else if (prev === numPages) {
        return (prev = 1);
      }
    });
  }
  function PreviousPage() {
    setPageNumber((prev) => {
      if (pageNumber === 1) {
        return numPages;
      }
      if (pageNumber >= prev) {
        return (prev -= 1);
      }
    });
  }

  function ZoomFuncPlus() {
    SetZoomIndex((prev) => {
      return (prev += 0.1);
    });
  }

  function ZoomFuncMinus() {
    SetZoomIndex((prev) => {
      return (prev -= 0.1);
    });
  }
  return (
    <div className="pdfwrapper">
      <ToastContainer />
      <div className="pdfHeader">
        <div className="pdfHeaderLeft">
          <FaAngleLeft
            className="pdfHeaderIcon"
            onClick={() => window.history.back()}
          />
          <h2>Manual Pdf Solution</h2>
        </div>
        <div className="pdfHeaderRight">
          <FaPlusCircle onClick={ZoomFuncPlus} className="pdfHeaderRightIcon" />
          <FaMinusCircle
            onClick={ZoomFuncMinus}
            className="pdfHeaderRightIcon"
          />
        </div>
      </div>
      <div className="PdfContainer">
        <Document
          file={pdfFile}
          onLoadError={onDocumentError}
          onDocumentError={onDocumentError}
          onLoadSuccess={onDocumentSuccess}
          onLoadProgress={onDocumentLoad}
        >
          <Page
            className={"page"}
            pageNumber={pageNumber}
            renderTextLayer={false}
            scale={zoomIndex}
          ></Page>
        </Document>
      </div>
      <div className="pdfBtnsContainer">
        <div className="pdfTextNumPages">
          <span>{numPages ? `${pageNumber}/${numPages}` : "Pdf"} Pages</span>
        </div>
        <div className="pdfBtns">
          <button className="pdfNextPage" onClick={PreviousPage}>
            <FaAngleLeft />
          </button>
          <button className="pdfPreviousPage" onClick={NextPage}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
export default PdF;
