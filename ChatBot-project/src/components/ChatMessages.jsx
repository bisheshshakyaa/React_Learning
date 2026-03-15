import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "../css/ChatMessages.css";

export default function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  // Access HTML element we are going to use useEffect
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chatMessage-Container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message} // Result of the code are saved in the message prop.
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
