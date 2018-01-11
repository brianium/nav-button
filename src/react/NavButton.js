import React, { Component } from "react";
import isEqual from "lodash.isequal";
import factory from "../";
import NavQrButton from '../NavQrButton';

class NavButton extends Component {
  componentDidMount() {
    const { props } = this;
    this.navifiy(props);
  }

  componentWillReceiveProps(nextProps) {
    const { props } = this;
    if (isEqual(props, nextProps)) {
      return;
    }
    this.navifiy(nextProps);
  }

  className() {
    const { className, alt, size, type } = this.props;
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
    if (type === 'qr') {
      classes.push('nav-btn--qr');
    }
    return classes.join(" ").trim();
  }

  resetButton() {
    this.button.removeListeners();
    if (this.button instanceof NavQrButton) {
      this.button.hasQrCode() && this.button.clearQrCode();
      const qr = this.button.node.querySelector('.nav-btn-qr');
      qr.style.cssText = '';
    }
  }

  navifiy(props) {
    const { element } = this;
    const { onCopy } = props;

    if (this.button) {
      this.resetButton();
    }

    this.button = factory(element, props);
    this.button.onCopy(e => onCopy(e));
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
