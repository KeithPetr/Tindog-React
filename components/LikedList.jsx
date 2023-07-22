/* eslint-disable react/prop-types */

export default function LikedList({ dog, navigateToMessages, setMessageArea, setMessagesArray }) {
  function handleSendMessage() {
    setMessageArea(true); // Show the MessageArea
    navigateToMessages(dog);
    setMessagesArray((prevData) => {
      const profileExists = prevData.some((message) => message.name === dog.name);
      if (!profileExists) {
        // Add the dog's profile to the messagesArray if it doesn't exist
        return [...prevData, dog];
      }
      return prevData; // If the profile already exists, return the unchanged array
    });
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
        {dog.messages.length > 0 ? (
          <div className="message-content">
            <p>{dog.messages[dog.messages.length - 1]}</p>
          </div>
        ) : (
          <p className="liked-message" onClick={handleSendMessage}>
            Send a message
          </p>
        )}
      </div>
    </div>
  );
}
