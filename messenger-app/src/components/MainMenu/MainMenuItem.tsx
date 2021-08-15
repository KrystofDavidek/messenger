import React from "react";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "main-menu",
});

interface MainMenuItemProps {
  imgPath: string;
  alt: string;
  text: string;
}

export const MainMenuItem: React.FC<MainMenuItemProps> = ({ imgPath, alt, text }) => {
  return (
    <a href="index-result.html" {...classes("link")}>
      <div {...classes("image")}>
        <img {...classes("image-animation")} src={imgPath} alt={alt} />
      </div>
      <span {...classes("text")}>{text}</span>
    </a>
  );
};
