/* eslint-disable react/prop-types */
import ProfileIcon from "../images/profile-icon.png";
import PawIcon from "../images/paw-icon.png";
import ChatIcon from "../images/chat-icon.png";

export default function Header({getLikedList, likedDogs, setGetList, viewMessages, setGetMessages}) {

  const display = likedDogs.length < 1 ? "none" : "flex"

  function removeList() {
    setGetList(false)
    setGetMessages(false)
  }

  return (
    <header>
      <div onClick={getLikedList} className="profile-icon-container">
        <img className="profile-icon" src={ProfileIcon} />
        <div className="profile-count" style={{display: display}}>{likedDogs.length}</div>
      </div>
      <button onClick={removeList} type="button" className="paw-icon-container">
        <img className="paw-icon" src={PawIcon} />
      </button>
      <div onClick={viewMessages} className="chat-icon-container">
        <img className="chat-icon" src={ChatIcon} />
      </div>
    </header>
  );
}
