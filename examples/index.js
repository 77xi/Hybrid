// native inject js into webview
require("./nativeSimulator");

// webviwe import hybrid js sdk
const hybrid = require("../built").default;

// web -> native
hybrid
  .dispatch("base/openURL", { url: "www.goggle.com" })
  .then(console.log)
  .catch(console.error);

// web -> native -> web
const unsubscribe1 = hybrid.listen("base/themeChange", console.log);
const unsubscribe2 = hybrid.listen("base/themeChange", console.log);

unsubscribe2();
