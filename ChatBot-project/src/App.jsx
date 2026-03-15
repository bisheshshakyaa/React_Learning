import { useEffect, useState } from "react";
import "./App.css";
import LoadingGif from "./assets/gif/loading-spinner.gif";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
    // [{
    //   message: 'Hello Chatbot',
    //   sender: 'user',
    //   id: 'id1'
    // },
    // {
    //   message: 'Hi! How can I help you?',
    //   sender: 'robot',
    //   id: 'id2'
    // },
    // {
    //   message: 'Can you get me todays date',
    //   sender: 'user',
    //   id: 'id3'
    // },
    // {
    //   message: 'Todays is February 7',
    //   sender: 'robot',
    //   id: 'id4'
    // },
  );
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0]  // Current Data
  // const setChatMessages = array[1];  // Second value in array update function. Lets you update the data so called updater function
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="Comp_container">
      {chatMessages.length === 0 ? (
        <div className="Welcome-text">
          <p>
            Welcome to the chatbot project! Send a message using the textbox
            below
          </p>
        </div>
      ) : (
        <ChatMessages chatMessages={chatMessages} />
      )}

      {loading && <img src={LoadingGif} className="gif-size"></img>}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
