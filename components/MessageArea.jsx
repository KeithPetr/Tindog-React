/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

export default function MessageArea({
  selectedDogMessage,
  setSelectedDogMessage,
  setMessagesArray,
}) {
  const { messages, name, avatar } = selectedDogMessage;
  const [inputText, setInputText] = useState(""); // State to store input text
  const lastChatBubbleRef = useRef(null); // Ref to hold the last chat bubble element

  const handleInputSubmit = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      // Check if the 'Enter' key is pressed and the input is not empty
      const newMessage = inputText.trim();

      // Create a new object with the updated 'messages' array
      const updatedSelectedDogMessage = {
        ...selectedDogMessage,
        messages: [...messages, newMessage],
      };

      // Update the state with the new message
      setSelectedDogMessage(updatedSelectedDogMessage);

      // Update the messagesArray with the updated message
      setMessagesArray((prevMessagesArray) => {
        const messageIndex = prevMessagesArray.findIndex(
          (msg) => msg.name === name
        );
        if (messageIndex !== -1) {
          const updatedMessagesArray = [...prevMessagesArray];
          updatedMessagesArray[messageIndex] = updatedSelectedDogMessage;
          return updatedMessagesArray;
        }
        return prevMessagesArray;
      });

      // Clear the input text
      setInputText("");
    }
  };

  useEffect(() => {
    // Scroll to the last chat bubble after rendering
    if (lastChatBubbleRef.current) {
      lastChatBubbleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="message-area">
      <div className="dog-message-header">
        <img className="dog-message-pic" src={avatar} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="chat-bubbles-container">
        {messages.map((message, index) => (
          <p 
          className="your-message-bubble" 
          key={index}
          ref={index === messages.length - 1 ? lastChatBubbleRef : null}
          >
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
