var http = require("http");
var url = require('url');
var retObj = {"ipaddress":"","language":"","software":""}

var server = http.createServer(function(req, res) {
  // request handling logic...
  console.log("creating server...");
  var parsedURL = url.parse(req.url, true);
  console.log("pURL=" + JSON.stringify(parsedURL));
  console.log("req.headers="+JSON.stringify(req.headers));
  retObj.ipaddress = req.headers["x-forwarded-for"];
  retObj.language = req.headers["accept-language"];
  retObj.software = req.headers["user-agent"];
  console.log(JSON.stringify(req.headers["x-forwarded-for"]));
  console.log(JSON.stringify(req.headers["accept-language"]));
  console.log(JSON.stringify(req.headers["user-agent"]));
  var path = (parsedURL.path).substr(1); 
  console.log("path=" + path);
    
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(retObj));
      
})
server.listen(8080);