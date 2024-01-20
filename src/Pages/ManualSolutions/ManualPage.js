import ManualList from "./ManualList";
import { FaAngleLeft } from "react-icons/fa";
import "./Manual.css";

function ManualPage() {
  return (
    <div className="Manual-Solutions-Container">
      <div className="Manual-Solutions">
        <div className="Manual-Solutions-heading">
          <FaAngleLeft
            onClick={() => window.history.back()}
            className="Manual-Solutions-heading-icon"
          />
          <h2>Manual Solutions</h2>
        </div>
        <div className="Manual-SolutionsLists">
          <ManualList />
        </div>
      </div>
    </div>
  );
}

export default ManualPage;
