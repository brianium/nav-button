// rely on UMD bundle to pull api off of window
var factory = window["nav-button"].default;

/**
 * Demo copy listeners
 */
var defaultButton = factory("#default-nav");
defaultButton.onCopy(function() {
  var element = document.getElementById("nav-btn-default");
  element.classList.add("opaque");
  setTimeout(function() {
    element.classList.remove("opaque");
  }, 5000);
});

/// Alt buttons
var defaultButtonAlt = factory("#default-nav-alt");
defaultButtonAlt.onCopy(function() {
  var element = document.getElementById("nav-btn-default-alt");
  element.classList.add("opaque");
  setTimeout(function() {
    element.classList.remove("opaque");
  }, 5000);
});

/**
 * Enable all other demo buttons
 */
var demos = document.getElementsByClassName("demo-btn");
for (var i = 0; i < demos.length; i++) {
  factory(demos[i]);
}

var qrs = document.getElementsByClassName("demo-btn--qr");
for (var i = 0; i < qrs.length; i++) {
  factory(qrs[i], {
    type: "qr",
    position: qrs[i].dataset.position || "bottom"
  });
}

/*************************
 * React Components
 *************************/
var NavButton = window["nav-button-react"].NavButton;
var NavQrButton = window["nav-button-react"].NavQrButton;

var target1 = document.getElementById("react-nav-btn");
var target2 = document.getElementById("react-nav-qr");

ReactDOM.render(
  React.createElement(
    NavButton,
    {
      address: "NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt",
      onCopy: function() {
        var element = document.getElementById("nav-btn-default-react");
        element.classList.add("opaque");
        setTimeout(function() {
          element.classList.remove("opaque");
        }, 5000);
      }
    },
    null
  ),
  target1
);

ReactDOM.render(
  React.createElement(
    NavQrButton,
    {
      address: "NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt",
      text: "Pay with NAV",
      actionText: "Show QR Code",
      closeText: "Thanks! Got it",
      alt: true
    },
    null
  ),
  target2
);
