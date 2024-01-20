import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import  "./calculator.css";
import AddResults from "./AddResults";
import { useStudentAppContext } from "../../Contexts/ContextData";



function ResultPage(){
    const [closePromp, setClosePromp] = useState(false)
    const { studentData, setStudentData } = useStudentAppContext();

    let arrScore = []
    let units = 0
    let creditScore = 0
    let Gpa = "0.00"
    let idDel = ""
      
    function ClosePromptFunc(){
        setClosePromp(false)
    } 

    function CloseDontSave(){
        setClosePromp(false)
        window.history.back()
    }

    function  IsSaved(e){
        let semester = document.querySelector(".first").className.includes("activeSemester")
        let level = parseInt(e.target.nextElementSibling.firstChild.nodeValue) 
        let curData = studentData.gpaArray.length

        console.log(studentData)
      let levelData =  studentData.savedGpaArr.find(el=>{
            return el.level === level ? el : ""
        })

        if(semester){
            curData === levelData.firstSemester.results.length &&
        window.history.back() 
            curData >  levelData.firstSemester.results.length &&
            setClosePromp(true)
        }else{
            curData === levelData.secondSemester.results.length &&
              window.history.back() 
            curData  > levelData.secondSemester.results.length &&
            setClosePromp(true)
        }
    }
    function AddCourse(){
        let level =  studentData.savedGpaArr?.find(el=>{
            
            return el.level === +studentData.currentLevel && el
        })



   
document.querySelector(".first").className.includes("activeSemester")?
       idDel = level.firstSemester.id[0]++
        : idDel = level.secondSemester.id[0]++

       
        setStudentData(prev=>{
            return{
                ...prev,
                gpaArray:[...prev.gpaArray,{
                    id: [idDel],
                    unit: document.querySelector(".units").value,
                    grade: document.querySelector(".grade").value,
                    course: document.querySelector(".courseInput").value
                }]
            }
        })

       
    }

    if( document.querySelector(".units")){
        document.querySelector(".units").value = 1
        document.querySelector(".grade").value = 'A'
        document.querySelector(".courseInput").value = ""
    }

    function CheckGradeScore(score){
        if(score === "A"){
            return 5
            }else if(score === "B"){
            return 4
            }
            else if(score === "C"){
            return 3
            }
            if(score === "D"){
            return 2
            }
            if(score === "E"){
            return 1
            }
            if(score === "F"){
            return 0
            }
}

studentData.gpaArray.flat(Infinity).forEach(el => {
      const grade = +CheckGradeScore(el.grade)
      const unit = +el.unit
      let creditscore = grade * unit
      arrScore.push({unit:unit, creditscore: creditscore})
    });

arrScore.forEach(el=>{
    units += el.unit
    creditScore += el.creditscore
})

if( units !==  0){
 Gpa = (creditScore/units ).toFixed(2)
}




function SaveGpa(){
    
    let curLevel = studentData.currentLevel
    let firstSemester = document.querySelector(".first").className.includes("activeSemester")
    let secondSemester = document.querySelector(".second").className.includes("activeSemester")


    const curLevelData = studentData.savedGpaArr?.find(el=>{
        return  el.level === +curLevel && el
    })
    
    if(!(studentData.gpaArray.length > 0)) {
            if(firstSemester){
                curLevelData.firstSemester.gpa.splice(0, curLevelData.firstSemester.gpa.length)
                curLevelData.firstSemester.gpa.push("0.00")    
            }

            if(secondSemester){
                curLevelData.secondSemester.gpa.splice(0, curLevelData.secondSemester.gpa.length)
                curLevelData.secondSemester.gpa.push("0.00")    
            }
    }else{
        if(firstSemester){ 
        let resultArr = curLevelData.firstSemester.results
          

            console.log(resultArr)
            {
            curLevelData.firstSemester.results.splice(0, resultArr.length)
            curLevelData.firstSemester.results.push(...studentData.gpaArray)
            curLevelData.firstSemester.gpa.splice(0, curLevelData.firstSemester.gpa.length)
            curLevelData.firstSemester.gpa.push(Gpa)
          }
            
        } 
         
         if(secondSemester){

            let resultArr =  curLevelData.secondSemester.results
    {       
        curLevelData.secondSemester.results.splice(0, resultArr.length)
            resultArr.push(...studentData.gpaArray)
            curLevelData.secondSemester.gpa.splice(0, curLevelData.secondSemester.gpa.length)
            curLevelData.secondSemester.gpa.push(Gpa)
          }
         }
    }

  

    setStudentData(prev=>{
        return{
            ...prev,
            savedGpaArr: studentData.savedGpaArr
        }
    }) 

}


function DisplayNextSemester(e){
    // Remove All active className
[...e.target.parentElement.children].forEach(el=>{
        el.classList.remove("activeSemester")
    })
// Add active class
e.target.classList.add("activeSemester")
// get smester classsname
let semester = e.target.className
let SemesterResult 
// find which level it is
let resultsData = studentData.savedGpaArr.find(el=>{
    return   el.level === +studentData.currentLevel && el
})

// check which smemeter being switched to
if( semester.includes(1) ){
    SemesterResult=   resultsData.firstSemester.results
}
else{
    SemesterResult =  resultsData.secondSemester.results

}

setStudentData(prev=>{
    return {
        ...prev,
        gpaArray: SemesterResult
    }
})

}


    return(
        <div>
            <div className="resultPageDiv--1">
                <span onClick={IsSaved}>X</span>
                <h3>{`${studentData.currentLevel}Level`} </h3>
                <FaSave onClick={SaveGpa} className={"savegpa"}/>
            </div>
            <div  className="resultPageDiv--2">
                <p className={`first activeSemester ${1}`} onClick={DisplayNextSemester}>1st Semester</p>
                <p className={`second  ${2}`} onClick={DisplayNextSemester}>2nd Semester</p>
            </div>
            <div className="resultPageDiv--3">
              <p>{Gpa === NaN ?"0.00" : Gpa }</p> 
              <p>Total GPA for first semester</p> 
            </div>
            <div className="resultPageDiv--4">
             <table className="resultTable">
                <tr>
                    <th>Course</th>
                    <th>Credit</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td className="input-td"><input className="courseInput"/></td>
                    <td>
                        <select className="resultSelect units">
                            <option>1</option> 
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </td>
                    <td>
                        <select className="resultSelect grade">
                            <option>A</option> 
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </select>
                    </td>
                </tr>
             </table>
            </div>
          <AddResults/>
            <button className="addLevelBtn btnCourse" onClick={AddCourse}>Add Course</button>
             {closePromp &&
            <div className="closePrompt">
                <h3>Confirm</h3>
                <p>Are yo sure you want to exist without saving</p>
                <div>
                <button onClick={CloseDontSave} >yes close</button>
                <button onClick={ClosePromptFunc}>cancel</button>
                </div>
            </div>
}
        </div>
    )
}



export default ResultPage;