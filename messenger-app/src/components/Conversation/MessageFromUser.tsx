import React from "react";
import { MessageProps } from "./ConversationContent";

export const MessageFromUser: React.FC<MessageProps> = ({ content }) => {
  return (
    <div className="message message--right">
      <div className="message__body">
        <p>{content}</p>
      </div>
    </div>
  );
};
