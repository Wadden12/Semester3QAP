// Date May 27th
//Author Mike Wadden
// File: QAP 2 for Node

// Notes more than 6 routes
// look at http module
// greater than 5 http status codes
// look at redirects and cookies and additonal http module features

const http = require("http");
const rotues = require("./routes");
const status = require("./status");

//imports the functions from the Routes Folder

const server = http.createServer((request, response) => {
  let path = "./views/";
  // sets the path to the directory for the html files
  // added a cookie for each page as the name of the page

  switch (request.url) {
    case "/":
      console.log("Home Page loaded");
      // change the status code between 200 to 418 or 404 to get a different responce
      // going to work on making a single routes function which should help make the code more efficent
      response.statusCode = 200;

      if (response.statusCode === 200) {
        path += "index.html";
        rotues.index(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);

      break;

    case "/about":
      console.log("About Page loaded");

      response.statusCode = 200;
      if (response.statusCode === 200) {
        path += "about.html";
        rotues.about(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = About");
      break;

    case "/contact":
      console.log("Contact Page loaded");
      response.statusCode = 200;
      if (response.statusCode === 200) {
        path += "contact.html";
        rotues.contact(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = Contact");
      break;

    case "/gallery":
      console.log("Gallery Page loaded");
      response.statusCode = 200;
      if (response.statusCode === 200) {
        path += "gallery.html";
        rotues.gallery(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = Gallery");
      break;

    case "/subscribe":
      console.log("Subscribe Page loaded");
      response.statusCode = 200;

      if (response.statusCode === 200) {
        path += "subscribe.html";
        rotues.subscribe(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = Subscribe");
      break;

    case "/log":
      console.log("Log Page Loaded");
      response.statusCode = 200;

      if (response.statusCode === 200) {
        path = "Log/logger.txt";
        response.setHeader("Location", "/log");
        rotues.logPage(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = Log");
      break;
    case "/styles":
      console.log("CSS Page Loaded");
      response.statusCode = 200;

      if (response.statusCode === 200) {
        path = "views/CSS/styles.css";
        response.setHeader("Location", "/styles");
        rotues.stylesCSS(path, response);
        status.statusCheck(request, response);
      } else status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page styles");
      break;

    // Redirect from old url to new one

    case "/gallery-nl":
      response.statusCode = 301;
      status.statusCheck(request, response);
      console.log("Redirect from the old url to the new gallery");
      response.end();
      break;

    default:
      console.log("Load 404 Error page");
      response.statusCode = 404;
      status.statusCheck(request, response, path);
      response.setHeader("set-cookie", "Page = 404 Error");
      break;
  }
});
server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
