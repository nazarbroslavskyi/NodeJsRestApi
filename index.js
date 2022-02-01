var express = require("express");

var app = express();

const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world!\n");
});

server.listen(port, '192.168.1.100', () => {
  console.log(`Server running at on port ${port}`);
});
