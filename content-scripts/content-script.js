const browser = require("webextension-polyfill");

browser.runtime.onMessage.addListener(request => {
  if (request.msg) {
    if (request.msg.action === "print_in_console") {
      console.log(`%c ${window.location}`, "color:#38B549;");
    } else if (request.msg.action === "change_body_color") {
      document.body.style.background = request.msg.value;
    }
  }
});
