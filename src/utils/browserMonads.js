const { Nothing, isNothing } = require("nothing-mock");

const win = typeof window !== "undefined" ? window : Nothing;
const doc = typeof document !== "undefined" ? document : Nothing;

win.history.replaceState({ previousLocation: [] }, doc.title);
win.addEventListener("beforeunload", () => {
  win.history.replaceState({ previousLocation: [] }, doc.title);
});

module.exports.window = win;
module.exports.document = doc;
module.exports.exists = variable => !isNothing(variable);
