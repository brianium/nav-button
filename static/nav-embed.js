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
(function() {
  function readOptions(element) {
    return {
      address: element.dataset.address,
      text: element.dataset.text,
      alt: element.dataset.alt === "true" ? true : false,
      actionText: element.dataset.actionText,
      type: element.dataset.type,
      size: element.dataset.size
    };
  }

  function replace() {
    var className = "nav-btn-placeholder";
    var createButton = window["nav-button"].createButton;
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

  //execute
  appendStyle();
  var js = document.createElement("script");
  js.onload = function() {
    console.log("loaded");
    if (document.readystate === "complete") {
      replace();
    } else {
      document.addEventListener("DOMContentLoaded", function() {
        replace();
      });
    }
  };
  js.src = "//cdn.rawgit.com/brianium/nav-button/gh-pages/nav-button.js";
  document.head.appendChild(js);
})();
