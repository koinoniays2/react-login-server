import mongoose from "mongoose";
mongoose.connect(`${process.env.DB_URL}/board-express`); // mongoose를 사용하여 MongoDB /board-express라는 데이터베이스에 연결

const db = mongoose.connection; // 연결 상태를 모니터링(연결에 성공했는지 또는 오류가 발생했는지를 확인)
db.on("error", error => console.log(error)); // 오류
db.once("open", () => console.log("Connected on DB")); // 데이터베이스 연결이 성공적으로 열리면 한 번만 실행될 콜백 함수