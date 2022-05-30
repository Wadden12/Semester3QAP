// function to check the status code and  run code
const rotues = require("./routes");
let statusCheck = (request, response, path) => {
  switch (response.statusCode) {
    case 200:
      console.log(`Status Code: ${response.statusCode} Satus: Ok`);
      break;

    case 301:
      console.log(`Status Code: ${response.statusCode} Status:Moved`);
      response.setHeader("Location", "/gallery");
      break;

    case 307:
      console.log(
        `Status Code: ${response.statusCode} Status: Temporary Redirect`
      );
      path += "maintance.html";
      rotues.maintance(path, response);
      break;
      break;

    case 401:
      console.log(`Status Code: ${response.statusCode} Status: UnAuthorized`);
      break;

    case 404:
      console.log(`Status Code: ${response.statusCode} Status: Not Found`);
      path += "error.html";
      rotues.notFound(request.url, path, response);
      break;

    case 418:
      console.log(
        `Status Code: ${response.statusCode} Status: Lauch April Fool Website`
      );
      path += "aprilFools.html";
      rotues.fourOneEight(path, response);
      break;

    case 503:
      console.log(
        `Status Code: ${response.statusCode} Status: Service Unavailable`
      );

      break;
  }
};

module.exports = {
  statusCheck,
};
