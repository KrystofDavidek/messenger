import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "header",
});

export const Header = () => {
  return (
    <div {...classes()}>
      <div {...classes("notification")}>
        <span {...classes("title")}>Messages</span>
        <div {...classes("notification-icon")}>
          <span {...classes("notification-count")}>3</span>
        </div>
      </div>
      <nav {...classes("notification-navigation")}>
        <a {...classes("link")} href="#">
          Recent
        </a>
        <a {...classes("link")} href="#">
          Pinned
        </a>
      </nav>
    </div>
  );
};
