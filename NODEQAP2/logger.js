const EventEmitter = require("events");
const uuid = require("uuid");
path = require("path");
fs = require("fs");

class Logger extends EventEmitter {
  //   log(message) {
  //     // Send an HTTP Request example
  //     console.log(message);
  //     this.emit("messageLogged", { id: 1, url: "http://test" });
  //   }

  // creates a function to log events to a text file
  logEvent(route, level, message) {
    let logItem = null;
    const date = new Date();
    if (level === "error") {
      logItem = `Date:${date.toLocaleString()} Token: ${uuid.v4()} ${level.toUpperCase()} ${route}.html  ${message}\n`;
      console.log(logItem);
    } else {
      logItem = `Date: ${date.toLocaleString()}  Token: ${uuid.v4()} ${level.toUpperCase()} ${route}.html  ${message}\n`;
      console.log(logItem);
    }

    fs.appendFile("Log/logger.txt", logItem, (err) => {
      if (err) {
        throw err;
      } else {
      }
    });
  }
}

module.exports = Logger;
