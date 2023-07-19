/* eslint-disable react/prop-types */
import { useState } from "react";
import Arrow from "../images/arrow.png";
import MessageArea from "./MessageArea";

export default function Messages({
  messagesArray,
  messageArea,
  setMessageArea,
  setMessagesArray
}) {
  const [inputText, setInputText] = useState("");
  const [selectedDogMessage, setSelectedDogMessage] = useState(null);

  console.log(messagesArray);

  function handleInputEnter(dog, event) {
    if (event.key === "Enter") {
      const newMessage = event.target.value;
      setInputText("");

      // Create a new message object with the updated messages array
      const updatedMessage = {
        ...dog,
        messages: [...dog.messages, newMessage],
      };

      // Find the index of the message object in the messagesArray
      const messageIndex = messagesArray.findIndex(
        (msg) => msg.name === dog.name
      );

      if (messageIndex !== -1) {
        // Update the messagesArray with the updatedMessage
        const updatedMessagesArray = [...messagesArray];
        updatedMessagesArray[messageIndex] = updatedMessage;

        // Update the state with the updated messagesArray
        setMessagesArray(updatedMessagesArray);
      }

      setSelectedDogMessage(updatedMessage); // Set the selected dog's message
      setMessageArea(true)
    }
  }

  const dogMessage = messagesArray.map((dog) => {
    const { name, avatar } = dog;

    return (
      <div className="message-list" key={name}>
        <img className="dog-message-pic" src={avatar} alt={name} />
        <input
          type="text"
          placeholder="START THE CONVERSATION"
          onKeyDown={(event) => handleInputEnter(dog, event)}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
    );
  });

  return (
    <div className="message-center">
      <h1>Messages</h1>
      {messageArea && selectedDogMessage ? (
        <MessageArea messages={selectedDogMessage.messages} />
      ) : (
        dogMessage
      )}
    </div>
  );
}
