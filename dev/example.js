// rely on UMD bundle to pull api off of window
var factory = window.navButton.default;

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
