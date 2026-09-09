// Runs automatically on every page (see manifest.json's content_scripts).
// caliper-widget.js loads first and exposes window.PasswordCaliper; this
// file just starts it watching the page for password fields.
if (window.PasswordCaliper) {
  window.PasswordCaliper.attachAll();
}
