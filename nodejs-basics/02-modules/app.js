const http = require('http');
const module1 = require('./module1');

const onRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(module1.myString);
  module1.myFuntion();
  res.end();
};

http.createServer(onRequest).listen(8000);
