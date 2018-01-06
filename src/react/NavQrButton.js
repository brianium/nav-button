import React from "react";
import NavButton from "./NavButton";

/**
 * @return {String}
 */
function classes(props) {
  const { alt } = props;
  const classNames = ["nav-btn-container"];
  if (alt) {
    classNames.push("nav-btn-container--alt");
  }
  return classNames.join(" ");
}

/**
 * @return {Object}
 */
function options(props) {
  return Object.assign({}, props, { type: "qr" });
}

const NavQrButton = props => (
  <div class={classes(props)}>
    <NavButton options={options(props)} {...props} />
    <div className="nav-btn-qr">
      <canvas />
      <div className="nav-btn-qr__input">
        <input
          className="nav-btn-qr__input__field"
          type="text"
          value={props.address}
          readOnly
        />
        <button className="nav-btn-qr__input__btn">
          <svg
            aria-hidden="true"
            data-icon="clipboard"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M336 64h-80c0-35.29-28.71-64-64-64s-64 28.71-64 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h42v36c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-36h42a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zM192 40c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24" />
          </svg>
        </button>
      </div>
      <span className="nav-btn-qr__arrow" />
      <a
        className="nav-btn-qr__link"
        target="__blank"
        href="https://navcoin.org/"
      >
        navcoin.org
      </a>
    </div>
  </div>
);

export default NavQrButton;
