/* eslint-disable react/prop-types */

export default function LikedList({ dog, navigateToMessages }) {
  function handleSendMessage() {
    navigateToMessages(dog);
  }

  return (
    <div className="liked-profile">
      <div className="liked-image-container">
        <img src={`${dog.avatar}`} className="liked-dog-image" />
      </div>
      <div className="liked-text">
        <p className="liked-name-age">
          {dog.name}, {dog.age}
        </p>
        <p className="liked-message" onClick={handleSendMessage}>
          Send a message
        </p>
      </div>
    </div>
  );
}
