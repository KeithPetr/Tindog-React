/* eslint-disable react/prop-types */
import Arrow from "../images/arrow.png";

export default function Messages({ messagesArray }) {
  const dogMessage = messagesArray.map((message) => {
    const { name, avatar } = message;
    return (
      <div className="message-bubble" key={name}>
        <img className="dog-message-pic" src={avatar} alt={name} />
        <input type="text" placeholder="START THE CONVERSATION"></input>
        <img className="arrow" src={Arrow} alt="arrow" />
      </div>
    );
  });

  return (
    <div className="message-center">
      <h1>Messages</h1>
      {dogMessage}
    </div>
  );
}
