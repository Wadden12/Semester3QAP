const display = require("./display");
const Logger = require("./logger");
const logger = new Logger();

//regiester a listener

// logger.on("messageLogged", (arg) => {
//   console.log("Listener Called", arg);
// });
// logger.log("message");

// path route functions for each page
logger.on("log", (route, level, msg) => logger.logEvent(route, level, msg));

let index = (path, response) => {
  //   logger.logEvent("index", "info", "the home page for the site was visted");

  logger.emit("log", "index", "info", "homepage was visted");
  // setTimeout(() => {
  //   logger.emit("log", "index", "info", "the homepage was visted");
  // }, 2000);
  display.displayFile(path, response);
};
let fourOneEight = (path, response) => {
  //   logger.logEvent(
  //     "aprilFools",
  //     "Joke",
  //     "the home page for the site was visted or was it?"
  //   );
  logger.emit("log", "aprilFools", "joke", "homepage was visted or was it?");
  display.displayFile(path, response);
};

let maintance = (path, response) => {
  //   logger.logEvent(
  //     "maintance",
  //     "Error",
  //     "went to the maintance page while the website was down"
  //   );
  logger.emit("log", "maintance", "maintance", "maintance page was visted");
  display.displayFile(path, response);
};

let about = (path, response) => {
  logger.emit("log", "about", "info", "about page  was visted");
  //   setTimeout(() => {
  //     logger.emit("log", "about", "info", "the about was visted");
  //   }, 2000);
  //   logger.logEvent("about", "info", "the about page was visted");
  display.displayFile(path, response);
};

let gallery = (path, response) => {
  logger.emit("log", "gallery", "info", "gallery page was visted");
  //   setTimeout(() => {
  //     logger.emit("log", "gallery", "info", "the gallery page was visted");
  //   }, 2000);
  //   logger.logEvent("gallery", "info", "the gallery page was visted");
  display.displayFile(path, response);
};

let subscribe = (path, response) => {
  logger.emit("log", "subscribe", "info", "subscribe page was visted");
  //   setTimeout(() => {
  //     logger.emit("log", "subscribe", "info", "the subscribe page was visted");
  //   }, 2000);
  //   logger.logEvent("subscribe", "info", "the subscribe page was visted");
  display.displayFile(path, response);
};

let contact = (path, response) => {
  logger.emit("log", "contact", "info", "contact page was visted");
  //   setTimeout(() => {
  //     logger.emit("log", "contact", "info", "the contact page was visted");
  //   }, 2000);
  //   logger.logEvent("contact", "info", "the contact page was visted");
  display.displayFile(path, response);
};

let logPage = (filename, response) => {
  display.displayFile(filename, response);
  logger.emit("log", "log", "admin", "log page was visted");
  //   logger.logEvent("log", "info", "the log page was visted");
};

let notFound = (url, path, response) => {
  logger.emit("log", url, "error", "Page was not Found 404 error");
  //   setTimeout(() => {
  //     logger.emit("log", url, "error", "Page was not Found 404 error");
  //   }, 2000);
  //   logger.logEvent(url, "error", "route was not found");
  display.displayFile(path, response);
};

// export functions to be used on another module
module.exports = {
  index,
  about,
  gallery,
  contact,
  subscribe,
  notFound,
  logPage,
  fourOneEight,
  maintance,
};
