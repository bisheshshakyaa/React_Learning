import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "../css/ChatInpt.css";

export function ChatInput({
  chatMessages,
  setChatMessages,
  loading,
  setLoading,
}) {
  const [inputText, setInputText] = useState(""); // Done to save the text from the textbox as data changes overtime for it

  // function EnterValue(event) {
  //   setInputText(event.key)
  // }
  function EnterValue(event) {
    if (event.key === "Enter") {
      SendMessages();
    }
  }

  function RemoveVal(event) {
    if (event.key === "Escape") {
      removeMessage();
    }
  }

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function removeMessage() {
    setInputText("");
  }
  // ? Random Kura gare ho yo SpecialWord Wala
  // function SpecialWord() {
  //   if (event.key === '`' || event.key === "`") {
  //     setInputText('');
  //   }
  // }

  async function SendMessages() {
    // Updator Function.

    if (inputText.trim() === "" || loading) return; // if the state is empty then return gari halcha khali text haru pathauna na milne gari

    const messageToSend = inputText; // Text in the Input are stored in messageToSend
    setInputText(""); // Right after the inputText is stored it is the input is set to be empty for clearing the input and responsive feel
    setLoading(true); // Start Loading

    const newChatMessages = [
      ...chatMessages, // Data Lai chai Copy garna ko lagi chai we are using the spread operator.
      {
        message: messageToSend, // inputText le chai take's the text we write in text box
        sender: "user",
        id: crypto.randomUUID(), // Unique ID string
      },
    ];
    setChatMessages(newChatMessages);

    const Response = await Chatbot.getResponseAsync(messageToSend); // External Library being used here
    setChatMessages([
      ...newChatMessages, // Data Lai chai Copy garna ko lagi chai we are using the spread operator.
      {
        message: Response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setLoading(false);
    // setInputText(''); // Yes le chai value empty ma rakio so everytime send gare paxi yo run huncha
  }
  return (
    <div className="chat-input-container">
      <input
        className="txt_field"
        placeholder="Send Message a to Chatbot"
        size="30"
        onChange={saveInputText}
        disabled={loading}
        value={inputText} // ani mathi ko ma ('') empty string bhako le garda value ni empty huncha
        onKeyDown={(event) => {
          EnterValue(event);
          RemoveVal(event);
          // SpecialWord(event);
        }}
      />
      <button className="send-btn" onClick={SendMessages} disabled={loading}>
        Send
      </button>
    </div>
  );
}
