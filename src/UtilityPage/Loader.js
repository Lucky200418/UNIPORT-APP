import { Audio } from "react-loader-spinner";
import "./unavailable.css";
function Loader() {
  return (
    <div className="IntroLoader">
      <Audio
        height={"80"}
        width={"80"}
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
}

export default Loader;
