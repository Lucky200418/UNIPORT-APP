import  "./calculator.css";
import { useStudentAppContext } from "../../Contexts/ContextData";


function AddResults(){
    const { studentData, setStudentData } = useStudentAppContext();

function deleteCourse(e){
    let id = +e.target.className.slice(-2)
    let firstSemester =  document.querySelector(".first").className.includes("activeSemester")

     const filteredArr =  studentData.gpaArray.flat(Infinity).filter(el=>{
        return el.id[0] !== id ? el : ""
       })

       let level =  studentData.savedGpaArr?.find(el=>{
        return el.level === +studentData.currentLevel ? el: ""
    })

if(filteredArr.length  === 0){
        if(firstSemester){
            level.firstSemester.id.splice(0, level.firstSemester.id.length)
            filteredArr.length === 0 && level.firstSemester.id.push(0)   
        }else{
            level.secondSemester.id.splice(0, level.secondSemester.id.length)
            filteredArr.length === 0 && level.secondSemester.id.push(0)
        }
}

if(firstSemester){
        level.firstSemester.results = filteredArr

}else{
    level.secondSemester.results = filteredArr
}


setStudentData(prev=>{
        return{
            ...prev,
            gpaArray: filteredArr,
            savedGpaArr: studentData.savedGpaArr
        }
       })


}


    return(
        <>   {
            studentData.gpaArray.flat(Infinity).map((el,i) => {
            return (
                <div key={i} className="resultDisplayContainer">
                    <div className="resultDisplayContainerCourse">
                        <div>{el.course}</div>
                        <div>{el.unit}</div>
                        <div>{el.grade}</div>
                    </div>
                    <div className={`resultClose ${el.id}`} onClick={deleteCourse}>x</div>
                </div>)
        })
    }
    </>
    )
}

export default AddResults