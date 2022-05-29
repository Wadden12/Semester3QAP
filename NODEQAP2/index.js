// Date May 27th
//Author Mike Wadden
// File: QAP 2 for Node

// Notes more than 6 routes
// look at http module
// greater than 5 http status codes
// look at redirects and cookies and additonal http module features

const http = require("http");
const rotues = require("./routes");
//imports the functions from the Routes Folder
const server = http.createServer((request, response) => {
  console.log(response);
  let path = "./views/";
  // sets the path to the directory for the html files

  switch (request.url) {
    case "/":
      console.log("Home Page loaded");
      path += "index.html";
      response.statusCode = 200;
      rotues.index(path, response);
      break;

    case "/about":
      console.log("About Page loaded");
      path += "about.html";
      response.statusCode = 200;
      rotues.about(path, response);
      break;

    case "/contact":
      console.log("Contact Page loaded");
      path += "contact.html";
      response.statusCode = 200;
      rotues.contact(path, response);
      break;

    case "/gallery":
      console.log("Gallery Page loaded");
      path += "gallery.html";
      response.statusCode = 200;
      rotues.gallery(path, response);
      break;

    case "/gallery-nl":
      response.statusCode = 301;
      console.log("Redirect from the old url to the new gallery");
      response.setHeader("Location", "/gallery");
      response.end();
      break;

    case "/subscribe":
      console.log("Subscribe Page loaded");
      path += "subscribe.html";
      response.setHeader("Location", "/about");
      rotues.subscribe(path, response);
      break;

    default:
      console.log("Load 404 Error page");
      path += "error.html";
      response.statusCode = 404;
      rotues.notFound(request.url, path, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
