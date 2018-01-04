// rely on UMD bundle to pull api off of window
var factory = window.navButton.nav;

// instantiate a default copy text button
var defaultButton = factory("#default-nav");
defaultButton.onCopy(function () {
  var element = document.getElementById('nav-btn-default');
  console.log(element);
  element.classList.add('opaque');
  setTimeout(function () {
    element.classList.remove('opaque');
  }, 5000);
});

// instantiate a nav button with qr code support
var qrButton = factory("#qr-nav", {
  type: "qr"
});
