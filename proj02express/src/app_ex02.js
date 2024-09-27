const http = require("http"); // 기본적으로 제공되기 때문에 모듈 설치 불필요

const PORT = 3333;

const title = `템프릿을 이용한 출력`;
const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>템프릿을 이용한 출력</h1>
    <h3>Hello world</h3>
</body>
</html>
`;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

  response.end(html);
});
server.listen(3333, () => {
  console.log(`서버 실행 중 >>> http://localhost:${PORT}`);
});
