import React, { Component } from "react";
import factory from "../";

class NavButton extends Component {
  componentDidMount() {
    const { element, props } = this;
    const { onCopy } = props;
    this.button = factory(element, props);
    this.button.onCopy(e => onCopy(e));
  }

  className() {
    const { className, alt, size } = this.props;
    const classes = [className, "nav-btn"];
    if (alt) {
      classes.push("nav-btn--alt");
    }
    if (size === "md") {
      classes.push("nav-btn--md");
    }
    if (size === "sm") {
      classes.push("nav-btn--sm");
    }
    return classes.join(" ").trim();
  }

  render() {
    const { address, text, actionText, actionTitle, closeText } = this.props;

    return (
      <button
        className={this.className()}
        data-address={address}
        data-clipboard-text={address}
        ref={element => {
          this.element = element;
        }}
      >
        <span className="nav-btn__text">{text}</span>
        <span
          data-close-text={closeText}
          title={actionTitle}
          className="nav-btn__action-text"
        >
          {actionText}
        </span>
      </button>
    );
  }
}

NavButton.defaultProps = {
  text: "Tip with NAV",
  alt: false,
  actionText: "Copy Address",
  actionTitle: "click to copy address",
  onCopy: () => {},
  className: "",
  position: "bottom",
  closeText: "Thanks! Got it",
  size: "",
  type: "copy"
};

export default NavButton;
