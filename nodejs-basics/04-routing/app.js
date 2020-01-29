const url = require('url');
const fs = require("fs")

const renderHTML = (path, res) => {
  fs.readFile(path, null, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
};

module.exports = {
  handleRequest: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let path = url.parse(req.url).pathname;

    switch (path) {
      case '/':
        renderHTML('./index.html', res);
        break;
      case '/login':
        renderHTML('./login.html', res);
        break;
      default:
        res.writeHead(404);
        res.write('Route not defined')
        res.end();
    }
  }
};
