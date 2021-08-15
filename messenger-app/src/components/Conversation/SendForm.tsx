import React, { useState } from "react";
import BEMHelper from "react-bem-helper";
import cancel from "../../assets/images/cancel.svg";
import send from "../../assets/images/send.svg";
import file from "../../assets/images/file.svg";
import picture from "../../assets/images/picture.svg";

const classes = new BEMHelper({
  name: "send-form",
});

interface ISendFormProps {
  onSendMessage: Function;
}

export const SendForm: React.FC<ISendFormProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const sendMessage = (message: string) => {
    setMessage("");
    return onSendMessage(message);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
      }}
      {...classes()}
    >
      <button {...classes("btn")} type="button" id="cancel-button">
        <img {...classes("cancel-img")} src={cancel} alt="Cancel" />
      </button>
      <div {...classes("input-group")}>
        <label {...classes("label")} id="sendInputLabel">
          Send
        </label>
        <input
          {...classes("controls")}
          type="text"
          aria-describedby="send-button"
          placeholder="Type your message"
          aria-labelledby="sendInputLabel"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => sendMessage(message)} {...classes("btn")} type="button" id="send-button">
          <img {...classes("send-img")} src={send} alt="Send message" />
        </button>
      </div>
      <button {...classes("btn", "desktop")} type="button">
        <img src={file} alt="File" />
      </button>
      <button {...classes("btn", "desktop")} type="button">
        <img src={picture} alt="Picture" />
      </button>
    </form>
  );
};
