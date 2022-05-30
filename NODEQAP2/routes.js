const display = require("./display");
const Logger = require("./logger");
const logger = new Logger();

//regiester a listener

// logger.on("messageLogged", (arg) => {
//   console.log("Listener Called", arg);
// });
// logger.log("message");

// path route functions for each page

let index = (path, response) => {
  logger.logEvent("index", "info", "the home page for the site was visted");
  display.displayFile(path, response);
  logger.on("route", (arg) => {
    console.log("Listener Called", arg);
  });
};

let about = (path, response) => {
  logger.logEvent("about", "info", "the about page was visted");
  display.displayFile(path, response);
  logger.on("route", (arg) => {
    console.log("Listener Called", arg);
  });
};

let gallery = (path, response) => {
  logger.logEvent("gallery", "info", "the gallery page was visted");
  display.displayFile(path, response);
};
logger.on("route", (arg) => {
  console.log("Listener Called", arg);
});

let subscribe = (path, response) => {
  logger.logEvent("subscribe", "info", "the subscribe page was visted");
  display.displayFile(path, response);
};
logger.on("route", (arg) => {
  console.log("Listener Called", arg);
});

let contact = (path, response) => {
  logger.logEvent("contact", "info", "the contact page was visted");
  display.displayFile(path, response);
};
logger.on("route", (arg) => {
  console.log("Listener Called", arg);
});

let notFound = (url, path, response) => {
  logger.logEvent(url, "error", "route was not found");
  display.displayFile(path, response);
};
logger.on("route", (arg) => {
  console.log("Listener Called", arg);
});

// export functions to be used on another module
module.exports = {
  index,
  about,
  gallery,
  contact,
  subscribe,
  notFound,
};
