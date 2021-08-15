import React from "react";
import BEMHelper from "react-bem-helper";
import logo from "../../assets/images/logo.svg";
import picture from "../../assets/images/picture.svg";
import file from "../../assets/images/file.svg";
import message from "../../assets/images/message.svg";
import contacts from "../../assets/images/contacts.svg";
import darkMode from "../../assets/images/dark-mode.svg";
import { MainMenuItem } from "./MainMenuItem";

const classes = new BEMHelper({
  name: "main-menu",
});

export const MainMenu = () => {
  return (
    <nav {...classes()}>
      <div {...classes("item", "brand")}>
        <MainMenuItem imgPath={logo} alt="Logo" text="" />
      </div>
      <div {...classes("item", ["only-mobile", "mobile-conversation"])}>
        <MainMenuItem imgPath={picture} alt="Picture" text="Picture" />
      </div>
      <div {...classes("item", ["only-mobile", "mobile-conversation"])}>
        <MainMenuItem imgPath={file} alt="File" text="File" />
      </div>
      <div {...classes("item", "mobile-recent")}>
        <MainMenuItem imgPath={message} alt="Message" text="Message" />
      </div>
      <div {...classes("item", "mobile-conversation")}>
        <MainMenuItem imgPath={contacts} alt="Message" text="Contacts" />
      </div>
      <div {...classes("item", ["recent", "conversation", "bottom"])}>
        <MainMenuItem imgPath={darkMode} alt="Message" text="Dark mode" />
      </div>
    </nav>
  );
};
