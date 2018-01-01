import NavButton from "./NavButton";
import NavQrButton from "./NavQrButton";

/**
 * Supported options with their defaults
 */
const DEFAULT_OPTIONS = {
  // The type of button to render. Valid options:
  // * qr - a QR code enabled tip button
  // * default - a simple click to copy address button
  type: "default"
};

/**
 * Main factory function for creating NAV buttons
 *
 * @param {String|HTMLElement} elementOrSelector
 * @param {Object} options
 */
export function nav(elementOrSelector, options = DEFAULT_OPTIONS) {
  let element = elementOrSelector;

  if (typeof elementOrSelector === "string") {
    element = document.querySelector(elementOrSelector);
  }

  if (!element instanceof HTMLElement) {
    throw new Error(
      `NavButton must be created with a valid element or selector`
    );
  }

  const { type } = options;
  switch (type) {
    case "qr":
      return new NavQrButton(element);
    default:
      return new NavButton(element);
  }
}
