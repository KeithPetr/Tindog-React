/* eslint-disable react/prop-types */

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
            src="images/like-image.png"
          />
          <img
            className={`nope-image ${
              !currentDog.hasBeenLiked && currentDog.hasBeenSwiped ? "" : "none"
            }`}
            id="nope-image"
            src="images/nope-image.png"
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
