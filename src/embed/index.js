import { createButton } from "../";
import { options } from "../options";

/**
 * Looks for markup with the following structure and creates a button from it
 *
 * <div
 *  class="nav-button-placeholder"
 *  data-address="my-address"
 *  data-text="Tip with Nav"
 *  data-alt="false"
 *  data-action-text="Copy Address"
 *  data-type="copy"
 *  data-size="lg"
 * >
 * </div>
 */

function readOptions(element) {
  var opts = {
    address: element.dataset.address,
    text: element.dataset.text,
    alt: element.dataset.alt === "true" ? true : false,
    actionText: element.dataset.actionText,
    type: element.dataset.type,
    size: element.dataset.size
  };
  return options(opts);
}

function replace() {
  var className = "nav-btn-placeholder";
  var placeholders = document.getElementsByClassName(className);
  var len = placeholders.length;
  for (var i = 0; i < len; i++) {
    var placeholder = placeholders[i];
    var opts = readOptions(placeholder);
    var parent = placeholder.parentNode;
    var btn = createButton(opts);
    parent.replaceChild(btn.node, placeholder);
  }
}

function appendStyle() {
  var href = "//cdn.rawgit.com/brianium/nav-button/gh-pages/nav-button.css";
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", href);
  document.head.appendChild(link);
}

// execute
appendStyle();
window.addEventListener("load", replace);
