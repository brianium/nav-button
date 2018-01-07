import NavButton from "./NavButton";
import NavQrButton from "./NavQrButton";
import { DEFAULT_OPTIONS, options } from "./options";
import * as tpl from "./templates";
import "scss/nav-button.scss";

/**
 * Main factory function for creating NAV buttons
 *
 * @param {String|HTMLElement} elementOrSelector
 * @param {Object} opts
 */
export default function nav(elementOrSelector, opts = DEFAULT_OPTIONS) {
  let element = elementOrSelector;

  if (typeof elementOrSelector === "string") {
    element = document.querySelector(elementOrSelector);
  }

  if (!element instanceof HTMLElement) {
    throw new Error(
      `NavButton must be created with a valid element or selector`
    );
  }

  const { type } = opts;
  switch (type) {
    case "qr":
      return new NavQrButton(element, opts);
    default:
      return new NavButton(element, opts);
  }
}

/**
 * Create a button dynamically
 *
 * @param {Object} opts
 * @return {NavButton}
 */
export function createButton(opts = {}) {
  const withDefaults = options(opts);
  const { type } = withDefaults;
  const markup = type === "qr" ? tpl.qrButton(opts) : tpl.defaultButton(opts);
  const container = document.createElement("div");
  container.innerHTML = markup;

  let element = container.firstElementChild;
  if (type === "qr") {
    // qr element is wrapped
    element = element.firstElementChild;
  }

  return nav(element, withDefaults);
}
