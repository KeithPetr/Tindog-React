import ProfileIcon from "../images/profile-icon.png"
import PawIcon from "../images/paw-icon.png"
import ChatIcon from "../images/chat-icon.png"

export default function Header() {
  return (
    <header>
      <div className="icon-container">
        <img className="profile-icon" src={ProfileIcon} />
      </div>
      <button type="button" className="paw-icon-container">
        <img className="paw-icon" src={PawIcon} />
      </button>
      <div className="icon-container">
        <img className="chat-icon" src={ChatIcon} />
      </div>
    </header>
  );
}
