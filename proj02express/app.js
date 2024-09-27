const http = require("http"); // 기본적으로 제공되기 때문에 모듈 설치 불필요
const path = require("path");
const express = require("express");
const app = express();

const title = `자동차 목록`;

// port 환경 설정
app.set("port", 3333);
// 뷰엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// 만일 app.js가 다른 폴더에 들어가 있다면 후자에 __dirname + "/경로" 혹은 path.join(__dirname, '경로')를 사용 (경로를 자동으로 설정)

// static 폴더 설정
app.use(express.static(path.join(__dirname, "public")));

// 데이터베이스에서 가져온 데이터로 대체될 임시 목록
const carList = [
  { _id: 1001, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2019 },
  { _id: 1002, name: "SONATA", price: 2500, company: "HYUNDAI", year: 2022 },
  { _id: 1003, name: "BMW", price: 5500, company: "BMW", year: 2018 },
  { _id: 1004, name: "S80", price: 4500, company: "VOLVO", year: 2023 },
];

app.get("/car/list", (req, res) => {
  // nodejs 콜백함수의 첫번째 인자는 error
  req.app.render("car/list", { carList }, (err, html) => {
    // __dirname을 사용했기 때문에 앞의 /와 뒤의 확장자 명을 쓰면 안됨
    if (err) throw err;
    res.end(html);
  });
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`서버 실행 중 >>> http://localhost:${app.get("port")}`);
});
