/* eslint-disable react/prop-types */
import LikeImage from "../images/LikeImage.png";
import NopeImage from "../images/NopeImage.png";

export default function DogContainer({ currentDog, isLastDogProfile }) {
  const { name, age, avatar, bio } = currentDog;
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className="img-container">
      {isLastDogProfile ? (
          <h1 className="no-profiles" style={isLastDogProfile ? styles : null}>No Profiles Left</h1>
      ) : (
        <>
          <img
            className={`like-image ${currentDog.hasBeenLiked ? "" : "none"}`}
            id="like-image"
            src={LikeImage}
          />
          <img
            className={`nope-image ${
              !currentDog.hasBeenLiked && currentDog.hasBeenSwiped ? "" : "none"
            }`}
            id="nope-image"
            src={NopeImage}
          />
          <img className="dog-img" src={`${avatar}`} alt="current dog image" />
          <p className="name-age">
            {name}, {age}
          </p>
          <p className="bio">{bio}</p>
        </>
      )}
    </div>
  );
}
