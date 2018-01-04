import QRCode from "qrcode";
import Clipboard from "clipboard";
import NavButton from "./NavButton";
import "./nav-qr.css";

export default class NavQrButton extends NavButton {
  static get HAS_QR_CLASS() {
    return "nav-btn-container--has-qr";
  }

  /**
   * Create a NavButton that supports QR codes
   */
  constructor(element) {
    super(element);
    element.classList.add("nav-btn--qr");
    this.parent = element.parentNode;
    this.popover = this.parent.getElementsByClassName("nav-btn-qr")[0];
    this.canvas = this.popover.getElementsByTagName("canvas")[0];
    this.address = element.getElementsByClassName("nav-btn__address")[0];
    this.addressText = this.address.textContent;
    this.closeText = this.address.dataset.closeText || "Thanks! Got it";
  }

  /**
   * Template method that treats the qr code popover's clipboard button
   * as the clipboard trigger
   */
  createClipboard(element) {
    const { parentNode } = element;
    const copyBtn = parentNode.querySelector(".nav-btn-qr__input__btn");
    return new Clipboard(copyBtn, {
      target(trigger) {
        return trigger.previousElementSibling;
      }
    });
  }

  /**
   * Is there a generated QR code currently in the button pop over?
   *
   * @return {Boolean}
   */
  hasQrCode() {
    const { parent } = this;
    return parent.classList.contains(NavQrButton.HAS_QR_CLASS);
  }

  /**
   * Animates the pop over using the given start and transition class. This facilitates
   * animating the pop over that was previously hidden. Classes are added to the animating element
   * as well as the button parent element - but only the pop over itself is animated
   *
   * @param {String} start - the animate start class
   * @param {String} transition - the animate transition class (performs transition)
   */
  animatePopover(start, transition, onEnd = () => {}) {
    const { popover, parent } = this;
    function transitionEndOnce() {
      parent.classList.remove(start, transition);
      popover.classList.remove(start, transition);
      popover.removeEventListener("transitionend", transitionEndOnce);
      onEnd();
    }
    popover.addEventListener("transitionend", transitionEndOnce);

    parent.classList.add(start);
    popover.classList.add(start);

    window.getComputedStyle(popover).opacity;

    parent.classList.add(transition);
    popover.classList.add(transition);
  }

  /**
   * Writes a QR code address to the button element's canvas element
   */
  createQrCode() {
    const { canvas, addressText, popover, address, closeText, parent } = this;
    QRCode.toCanvas(canvas, addressText, e => {
      if (e) {
        throw e;
      }
      address.textContent = `${closeText} \u00D7`;
      parent.classList.toggle(NavQrButton.HAS_QR_CLASS);
      this.animatePopover("nav-start-in", "nav-transition-in");
    });
  }

  /**
   * Clears the QR code and hides the button pop over
   */
  clearQrCode() {
    const { parent, address, addressText } = this;
    address.textContent = addressText;
    this.animatePopover("nav-start-out", "nav-transition-out", () => {
      parent.classList.remove(NavQrButton.HAS_QR_CLASS);
    });
  }

  /**
   * Extends click behavior to toggle showing the qr code pop over
   */
  onClick(e) {
    super.onClick(e);
    if (this.hasQrCode()) {
      this.clearQrCode();
    } else {
      this.createQrCode();
    }
  }
}
