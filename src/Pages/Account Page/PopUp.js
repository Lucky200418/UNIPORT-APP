import { useStudentAppContext } from "../../Contexts/ContextData";

function PopUp(props) {
  const { setStudentData } = useStudentAppContext();

  function setEditedDetails(newName, id) {
    setStudentData((prevalue) => {
      return {
        ...prevalue,
        userdetails: {
          ...prevalue.userdetails,
          firstname:
            id === "firstname" ? newName : prevalue.userdetails.firstname,
          lastname: id === "lastname" ? newName : prevalue.userdetails.lastname,
          middlename:
            id === "middlename" ? newName : prevalue.userdetails.middlename,
          gmail: id === "gmail" ? newName : prevalue.userdetails.gmail,
        },
      };
    });

    props.open((prevalue) => {
      return { ...prevalue, openedit: false };
    });
  }

  function editUserdetails(e) {
    const newName = [...e.target.parentElement.children][1].value;
    const id = props.id;
    // Edit Input Authentication
    if (!(id === "gmail") && newName.length > 0) {
      setEditedDetails(newName, id);
    } else if (newName.length > 10 && newName.includes("@")) {
      setEditedDetails(newName, id);
    } else {
      e.target.parentElement.classList.add("invalid-gmail");
    }
  }

  return (
    <>
      <div>
        <div className="popUpContainer">
          <span onClick={props.HandleClick}>X</span>
          <div className="popUp-content">
            <p>Edit {props.title}</p>
            <input type="text" id={props.id} placeholder={props.holderText} />
            {props.id === "gmail" && (
              <p className="invalid-text">Invalid gmail</p>
            )}
            <button onClick={editUserdetails}>Confirm</button>
          </div>
        </div>
      </div>
      <div className="overLay"></div>
    </>
  );
}

export default PopUp;
