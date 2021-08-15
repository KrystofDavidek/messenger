import React from "react";
import profileImage from "../../assets/images/profile-image.svg";
import { MessageProps } from "./ConversationContent";

export const MessageToUser: React.FC<MessageProps> = ({ content }) => {
  return (
    <div className="message message--left">
      <img className="message__profile-picture" src={profileImage} alt="Proflie picture" />
      <div className="message__body">
        <p>{content}</p>
      </div>
    </div>
  );
};
