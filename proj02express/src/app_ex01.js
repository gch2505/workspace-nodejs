const http = require("http"); // 기본적으로 제공되기 때문에 모듈 설치 불필요

const PORT = 3333;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head><title>첫번째 nodejs 서버</title></head>");
  response.write("<body>");
  response.write("<h1>Hello nodejs world</h1>");
  response.write("<h3>여러분 안녕하세요</h3>");
  response.write("</body>");
  response.write("</html>");
  response.end("");
});
server.listen(3333, () => {
  console.log(`서버 실행 중 >>> http://localhost:${PORT}`);
});
