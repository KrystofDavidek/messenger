import React from "react";
import BEMHelper from "react-bem-helper";
import mobileSwitcher from "../../assets/images/mobile-switcher.svg";

const classes = new BEMHelper({
  name: "mobile-switcher",
});

export const MobileSwitcher = () => {
  return (
    <div {...classes()}>
      <img src={mobileSwitcher} alt="Mobile layout switcher" />
    </div>
  );
};
