/* eslint-disable react/prop-types */
import { useState } from "react";
import Arrow from "../images/arrow.png";
import MessageArea from "./MessageArea";
import { getDatabase, ref, push } from "firebase/database";
import appSettings from "../src/firebaseConfig"; // Import your Firebase configuration object

const database = getDatabase(appSettings);
const messagesDB = ref(database, "messages");

export default function Messages({
  messagesArray,
  messageArea,
  setMessageArea,
  setMessagesArray,
}) {
  const [inputTexts, setInputTexts] = useState({}); // Object to store input texts for each dog
  const [selectedDogMessage, setSelectedDogMessage] = useState(null);

  console.log("Messages Array", messagesArray);
  console.log(inputTexts);
  console.log("selectedDogMessage:", selectedDogMessage);

  function handleInputEnter(dog, event) {
    if (event.key === "Enter") {
      const newMessage = event.target.value;
      push(messagesDB, { [dog.name]: [newMessage] });
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
      setInputTexts({ ...inputTexts, [dog.name]: "" }); // Clear input text for the current dog
      setMessageArea(true);
    }
  }

  function handleInputChange(dog, event) {
    setInputTexts({ ...inputTexts, [dog.name]: event.target.value }); // Update input text for the current dog
  }

  function handleViewMessages(selectedDogMessage) {
    setSelectedDogMessage(selectedDogMessage); // Set the selected dog's message
    setMessageArea(true); // Show the MessageArea
  }

  const dogMessage = messagesArray.map((dog) => {
    const { name, avatar, messages } = dog;
    const hasMessages = messages.length > 0;
    const recentMessage = hasMessages ? messages[messages.length - 1] : null;

    return (
      <div className="message-list" key={name}>
        <img className="dog-message-pic" src={avatar} alt={name} />
        {hasMessages ? (
          <div
            className="recent-message"
            onClick={() => handleViewMessages(dog)}
          >
            <p>{recentMessage}</p>
          </div>
        ) : (
          <input
            type="text"
            placeholder="START THE CONVERSATION"
            onKeyDown={(event) => handleInputEnter(dog, event)}
            value={inputTexts[dog.name] || ""} // Use the input text for the current dog
            onChange={(event) => handleInputChange(dog, event)} // Handle input change for the current dog
          />
        )}
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
    );
  });

  return (
    <div className="message-center">
      <h1>Messages</h1>
      {messageArea && selectedDogMessage ? (
        <MessageArea
          selectedDogMessage={selectedDogMessage}
          setSelectedDogMessage={setSelectedDogMessage}
          setMessagesArray={setMessagesArray}
        />
      ) : (
        dogMessage
      )}
    </div>
  );
}
