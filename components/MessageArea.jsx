/* eslint-disable react/prop-types */

import { useState } from "react";

export default function MessageArea({
  selectedDogMessage,
  setSelectedDogMessage,
}) {
  const { messages, name, avatar } = selectedDogMessage;
  const [inputText, setInputText] = useState(""); // State to store input text

  const handleInputSubmit = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      // Check if the 'Enter' key is pressed and the input is not empty
      const newMessage = inputText.trim(); // Remove leading and trailing whitespaces

      // Create a new object with the updated 'messages' array
      const updatedSelectedDogMessage = {
        ...selectedDogMessage,
        messages: [...messages, newMessage],
      };

      // Update the state with the new message
      setSelectedDogMessage(updatedSelectedDogMessage);

      // Clear the input text
      setInputText("");
    }
  };

  return (
    <div className="message-area">
      <div className="dog-message-header">
        <img className="dog-message-pic" src={avatar} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="chat-bubbles-container">
        {messages.map((message, index) => (
          <p className="your-message-bubble" key={index}>
            {message}
          </p>
        ))}
      </div>
      <div className="input-container">
        <input
          className="your-message-input"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onKeyDown={handleInputSubmit}
          placeholder="Type your message and press Enter..."
        />
      </div>
    </div>
  );
}
