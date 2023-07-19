/* eslint-disable react/prop-types */


export default function MessageArea({ messages }) {
  return (
    <div className="message-area">
      <h1>Message Area</h1>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
