import { useEffect, useState } from "react";
import "./calculator.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useStudentAppContext } from "../../Contexts/ContextData";

function MainCalculator() {
  const [addLevel , setAddLevel] = useState(false)
  const { studentData, setStudentData } = useStudentAppContext();
    
 

  function DisplayAddLevelForm(){
    setAddLevel(prev=> !prev)

  }

  function DeleteLevel(e){
  let level = +e.target.className.slice(-3)
  let filteredArr = studentData.savedGpaArr.filter(el=>{
    return el.level !== level ? el : ""
  })
  setStudentData(prev=>{
    return{
      ...prev,
      savedGpaArr: filteredArr
    }
  })
  }

  function AddNewLevel(){
   let value =  +document.querySelector(".LeveInput").value
   
   if(!(value.toString().length === 3)) return
   if(!(value.toString().includes("00")))return
   if(!(value >= 100)) return
    if(!(value <=500)) return
 
   let newLevelObj = {
          level: value,
          firstSemester: {
                  id: [0],
                  gpa:["0.00"],
                  results: []
          },
          secondSemester: {
                id: [0],
                gpa: ["0.00"],
                results: []
          }
  }

  studentData.savedGpaArr.push(newLevelObj)
  setStudentData(prev=>{
    return {
      ...prev,
      savedGpaArr: studentData.savedGpaArr
    }
  })
  setAddLevel(prev=> !prev)
  document.querySelector(".LeveInput").value =""
  }


  function DisplaySemesterResults(e){
    let level = e.target.className.slice(-4)

    const curGpaResults =  studentData.savedGpaArr.find(el=>{
      return  el.level === +level &&  el
    })

    setStudentData(prev=>{
      return{
        ...prev,
        currentLevel: level,
        gpaArray: curGpaResults.firstSemester.results
      }
    })
  }

  return (
    <div>
      <div className="containerHeading">
        <Link className="link" to={"/Main"}>
        <FaArrowLeft />
        </Link>
        <div>
          <h1>CGPA Calculator</h1>
          <p>Calculate and keep record of your grades</p>
        </div>
      </div>

      <div className="GpaResult">
        <h2>0.00</h2>
        <p>Total CGPA</p>
      </div>

     {!addLevel && <div>
        <button 
        className="addLevelBtn"
         onClick={DisplayAddLevelForm}>
          Add new Level</button>
      </div>}

 {addLevel && <div className="LevelFormGp FlexCol">
    <h3>Level name</h3>
    <input placeholder="Enter Level from 200 to 500" className="LeveInput"/>
    <div>
    <button onClick={AddNewLevel}>Save</button> <button onClick={DisplayAddLevelForm}>close</button>
    </div>
      </div>
    }
    <div className="SavedGpaContainerResults">

   {studentData.savedGpaArr.map((el,i)=>{
    let gpa1 = +el.firstSemester.gpa[0]
    let gpa2 = +el.secondSemester.gpa[0]

    return (
      <div className="GpResultsContainer" key={i}>
      <div className="ResultsDisplay">
            <div>
                <h3>{el.level}Level</h3>
                <div className="semesterResults">
                      <p>First Semester:  {gpa1 === 0 ? "0.00": el.firstSemester.gpa[0]}</p>
                      <p>Second Semester:  {gpa2 === 0 ? "0.00": el.secondSemester.gpa[0]}</p>
                </div> 
            </div>
              <h2>Total <br/><span className="totalGpa">{(gpa1/gpa2).toFixed(2) === "NaN" ? "0.00":((gpa1 + gpa2)/2).toFixed(2)} </span></h2>  
      </div>
      <Link to={"/ResultPage"}>
      <button className={`addLevelBtn ${el.level}`} onClick={DisplaySemesterResults}>View / Edit</button>    
      </Link>
      {el.level !== 100 &&
      <button className={`addLevelBtn ${el.level}`}  onClick={DeleteLevel}>Delete</button>
    }
  </div>
    )
  })} 


  </div>
    </div>
    
  )
}

export default MainCalculator;
