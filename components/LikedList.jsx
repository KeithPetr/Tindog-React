/* eslint-disable react/prop-types */

export default function LikedList({ dog }) {
  return (
    <div className="liked-profile">
      <div className="liked-image-container">
        <img src={`${dog.avatar}`} className="liked-dog-image" />
      </div>
      <div className="liked-text">
        <p className="liked-name-age">
          {dog.name}, {dog.age}
        </p>
        <p className="liked-bio">{dog.bio}</p>
      </div>
    </div>
  );
}
