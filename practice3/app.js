const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

app.set("port", 4000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// 더미 데이터
const studentList = [
  { grade: 1, class: 1, num: 1, name: "김김김", score: 98, rank: 2 },
  { grade: 1, class: 1, num: 2, name: "김박박", score: 95, rank: 3 },
  { grade: 1, class: 1, num: 3, name: "김이이", score: 98, rank: 1 },
  { grade: 1, class: 2, num: 1, name: "이당당", score: 70, rank: 5 },
  { grade: 1, class: 2, num: 2, name: "차차차", score: 84, rank: 4 },
];

app.get("/student/list", (req, res) => {
  req.app.render("student/list", { studentList }, (err, html) => {
    if (err) throw err;
    res.end(html);
  });
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`서버 실행 중 >>> http://localhost:${app.get("port")}`);
});
