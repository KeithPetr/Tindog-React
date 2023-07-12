import ProfileIcon from "../images/profile-icon.png"
import PawIcon from "../images/paw-icon.png"
import ChatIcon from "../images/chat-icon.png"

export default function Header() {
  return (
    <header>
      <div className="profile-icon-container">
        <img className="profile-icon" src={ProfileIcon} />
        <div className="profile-count">1</div>
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
