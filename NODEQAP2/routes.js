const display = require("./display");

let index = (path, response) => {
  display.displayFile(path, response);
};

let about = (path, response) => {
  display.displayFile(path, response);
};

let gallery = (path, response) => {
  display.displayFile(path, response);
};

let subscribe = (path, response) => {
  display.displayFile(path, response);
};

let contact = (path, response) => {
  display.displayFile(path, response);
};

let notFound = (url, path, response) => {
  display.displayFile(path, response);
};

module.exports = {
  index,
  about,
  gallery,
  contact,
  subscribe,
  notFound,
};
