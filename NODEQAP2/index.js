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
  let path = "./views/";
  // sets the path to the directory for the html files
  // added a cookie for each page as the name of the page

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
      response.setHeader("set-cookie", "Page = About");
      rotues.about(path, response);
      break;

    case "/contact":
      console.log("Contact Page loaded");
      path += "contact.html";
      response.statusCode = 200;
      response.setHeader("set-cookie", "Page = Contact");
      rotues.contact(path, response);
      break;

    case "/gallery":
      console.log("Gallery Page loaded");
      path += "gallery.html";
      response.statusCode = 200;
      response.setHeader("set-cookie", "Page = Gallery");
      rotues.gallery(path, response);
      break;

    // Redirect from old url to new one

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
      response.setHeader("set-cookie", "Page = Subscribe");
      rotues.subscribe(path, response);
      break;

    default:
      console.log("Load 404 Error page");
      path += "error.html";
      response.statusCode = 404;
      response.setHeader("set-cookie", "Page = 404 Error");
      rotues.notFound(request.url, path, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
