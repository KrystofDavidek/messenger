import React from "react";
import BEMHelper from "react-bem-helper";
import profileImage from "../../assets/images/profile-image.svg";
import { ConversationInterface } from "../../models/conversations";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const classes = new BEMHelper({
  name: "preview-conversation",
});

interface PreviewConversationProps {
  conversation: ConversationInterface;
}

const formatDate = (time: number) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(time);
};

export const PreviewConversation: React.FC<PreviewConversationProps> = ({ conversation }) => {
  return (
    <div {...classes()}>
      <div {...classes("profile-image")}>
        <img src={profileImage} alt="Proflie picture" />
      </div>
      <div {...classes("text-content")}>
        <div {...classes("text")}>
          <span {...classes("user-name")}>{conversation.messages[conversation.messages.length - 1].participant.nickName}</span>
          <time {...classes("time")}>{dayjs(conversation.updatedAt).fromNow()}</time>
        </div>
        <p {...classes("message")}>{conversation.messages[conversation.messages.length - 1].content}</p>
      </div>
    </div>
  );
};
