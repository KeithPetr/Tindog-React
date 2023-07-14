import ProfileIcon from "../images/profile-icon.png";
import PawIcon from "../images/paw-icon.png";
import ChatIcon from "../images/chat-icon.png";
import LikedList from "./LikedList";

export default function Header({getLikedList, likedDogs}) {

  const display = likedDogs ? "block" : "none"

  return (
    <header>
      <div onClick={getLikedList} className="profile-icon-container">
        <img className="profile-icon" src={ProfileIcon} />
        <div className="profile-count" >{likedDogs.length}</div>
      </div>
      <button type="button" className="paw-icon-container">
        <img className="paw-icon" src={PawIcon} />
      </button>
      <div className="chat-icon-container">
        <img className="chat-icon" src={ChatIcon} />
      </div>
    </header>
  );
}
