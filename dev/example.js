// rely on UMD bundle to pull api off of window
var factory = window.navButton.nav;

// instantiate a default copy text button
var defaultButton = factory("#default-nav");

// instantiate a nav button with qr code support
var qrButton = factory("#qr-nav", {
  type: "qr"
});
