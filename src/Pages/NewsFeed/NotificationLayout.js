import "./News.css";

function NotifcationsContainer({ data }) {
  return (
    <div className="NewsContainer">
      <div className="postAccImage">
        <img src="/Icon192.jpg" alt="image" />
      </div>
      <div className="postContainerContent">
        <div className="postTitleTopText">
          <h2>AcademySolutions</h2>
        </div>
        <p>@academysolution.</p>
        <p className="notifDate">{data.Dating}.</p>
        <div className="postDescription">
          <p>{data.description}</p>
        </div>
        <div className="postImageContainer">
          <img
            src={`https://academysolution.online/notification/${data.url}`}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default NotifcationsContainer;
