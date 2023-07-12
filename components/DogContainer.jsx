/* eslint-disable react/prop-types */

export default function DogContainer({ currentDog }) {
  const { name, age, avatar, bio } = currentDog;

  return (
    <div className="img-container">
      <img
        className={`like-image ${currentDog.hasBeenLiked ? "" : "none"}`}
        id="like-image"
        src="images/like-image.png"
      />
      <img
        className={`nope-image ${!currentDog.hasBeenLiked && currentDog.hasBeenSwiped ? "" : "none"}`}
        id="nope-image"
        src="images/nope-image.png"
      />
      <img className="dog-img" src={`${avatar}`} alt="current dog image" />
      <p className="name-age">
        {name}, {age}
      </p>
      <p className="bio">{bio}</p>
    </div>
  );
}
