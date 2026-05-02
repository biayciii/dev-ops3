const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello DevOps! Phien ban 1.0 (Blue Environment)\n');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server dang chay tai port ${PORT}`);
});
