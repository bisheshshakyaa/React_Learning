import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "../css/ChatMessage.css";

export function ChatMessage({ message, sender }) {
  // Destructuring parameter directly in top
  // const message = yolo.message // Message is being Received
  // const sender = yolo.sender
  // const {message, sender} = yolo;
  // This is ShortCut called Destructuring for the up 2 variables

  /* if (sender === "robot") {
         return (
          <div>
            <img src="robot.png" width="50" />
            {message}
          </div>
          )
 
       } */

  return (
    <div
      className={sender === "user" ? "chatMessage-user" : "chatMessage-robot"}
    >
      {sender === "robot" && (
        <img className="chatMessage-bot" src={RobotProfileImage} />
      )}
      <div className="chatMessage-txt">{message}</div>
      {sender === "user" && (
        <img className="chatMessage-profile" src={UserProfileImage} />
      )}
    </div>
  );
}
