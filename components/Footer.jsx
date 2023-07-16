/* eslint-disable react/prop-types */
import NopeIcon from "../images/nope-icon.png";
import LikeIcon from "../images/like-icon.png";

export default function Footer({ setCurrentDog, setLikedDogs, currentDog, isWaiting }) {
  function handleLike() {
    setCurrentDog(prevData => ({ ...prevData, hasBeenSwiped: true, hasBeenLiked: true }));
    setLikedDogs(prevLikedDogs => [...prevLikedDogs, currentDog]);
  }

  function handleNope() {
    setCurrentDog(prevData => ({...prevData, hasBeenSwiped: true}))
  }

  return (
    <footer id="footer">
      <div onClick={handleNope} className={`nope-icon-container ${isWaiting ? "disabled" : ""}`} id="nope-icon-container">
        <img
          className="nope-icon"
          id="nope-icon"
          src={NopeIcon}
        />
      </div>
      <div onClick={handleLike} className={`like-icon-container ${isWaiting ? "disabled" : ""}`} id="like-icon-container">
        <img
          className="like-icon"
          id="like-icon"
          src={LikeIcon}
        />
      </div>
    </footer>
  );
}
