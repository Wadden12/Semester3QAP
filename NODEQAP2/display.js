// refactored the display file into its own module

fs = require("fs");

let displayFile = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
};

let displayCSS = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.writeHead(response.statusCode, { "Content-Type": "text/css" });
      response.write(data);
      response.end();
    }
  });
};
let displayJS = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.writeHead(response.statusCode, {
        "Content-Type": "text/javascript",
      });
      response.write(data);
      response.end();
    }
  });
};

module.exports = {
  displayFile,
  displayCSS,
  displayJS,
};
