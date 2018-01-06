import Clipboard from "clipboard";

export default class NavButton {
  static get CLICK_DURATION() {
    return 600;
  }

  /**
   * Create a NavButton instance from the given nav button element
   *
   * @param {HTMLElement} element
   * @param {Object} options
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.address = this.element.dataset.address;
    this.clipboard = this.createClipboard(element);
    this.listen();
  }

  /**
   * Template method that treats the nav button element
   * as a clipboard element - that is it will copy its text content -
   * the nav coin address to the clipboard
   */
  createClipboard(element) {
    return new Clipboard(element);
  }

  /**
   * Default behavior just supports feedback animation for the clicked nav button
   */
  onClick(e) {
    const { target: address } = e;
    const className = "nav-btn__action-text--is-animating";
    address.classList.add(className);
    setTimeout(
      () => address.classList.remove(className),
      NavButton.CLICK_DURATION
    );
  }

  /**
   * Sets up the default click listener for a nav button
   */
  listen() {
    const { element } = this;
    element.addEventListener("click", e => this.onClick(e));
  }

  /**
   * Registers a listener for when the nav address has been copied
   */
  onCopy(fn) {
    this.clipboard.on("success", fn);
  }
}
