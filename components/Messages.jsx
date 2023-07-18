/* eslint-disable react/prop-types */
import Arrow from "../images/arrow.png";
import MessageArea from "./MessageArea";

export default function Messages({ messagesArray, messageArea, setMessageArea }) {

  function handleInputEnter(profileId, event) {
    if (event.key === "Enter") {
      const message = event.target.value;
      console.log(`Entered on Profile ID: ${profileId}`);
      console.log(`Message: ${message}`);
      setMessageArea(true);
    }
  }

  const dogMessage = messagesArray.map((message) => {
    const { name, avatar } = message;

    return (
      <div className="message-bubble" key={name}>
        <img className="dog-message-pic" src={avatar} alt={name} />
        <input
          type="text"
          placeholder="START THE CONVERSATION"
          onKeyDown={(event) => handleInputEnter(name, event)}
        />
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
    );
  });

  return (
    <div className="message-center">
      <h1>Messages</h1>
      {messageArea ? <MessageArea /> : dogMessage}
    </div>
  );
}
