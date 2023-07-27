/* eslint-disable react/prop-types */
import NopeIcon from "../images/nope-icon.png";
import LikeIcon from "../images/like-icon.png";

import { updateDogs, dogs } from "../src/data.js";

export default function Footer({ setCurrentDog, setLikedDogs, currentDog, isWaiting, setMessagesArray, messagesArray }) {
  function handleLike() {
    setCurrentDog(prevData => ({ ...prevData, hasBeenSwiped: true, hasBeenLiked: true }));
    setLikedDogs(prevLikedDogs => [...prevLikedDogs, currentDog]);

    // Update the dogs array in the data.js file
    const updatedDogs = dogs.map(dog => {
      if (dog.name === currentDog.name) {
        return { ...dog, hasBeenSwiped: true, hasBeenLiked: true };
      }
      return dog;
    });

    updateDogs(updatedDogs);
  }

  function handleNope() {
    setCurrentDog(prevData => ({ ...prevData, hasBeenSwiped: true}));

    // Update the dogs array locally in the component
    const updatedDogs = dogs.map((dog) => {
      if (dog.name === currentDog.name) {
        return { ...dog, hasBeenSwiped: true };
      }
      return dog;
    });
  
    // Update the dogs array in the data.js file after messagesArray is updated
    updateDogs(updatedDogs);
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
