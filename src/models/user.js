import mongoose from "mongoose";

// 스키마(문서의 구조를 정의하며, 각 필드와 해당 필드의 데이터 유형을 정의)
const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    email: {
        type: String,
        unique: true
    },
    profileImage: String,
    createdAt: Date,
    updatedAt: Date
})

// 스키마를 기반으로 User모델(db.js에서 정의한 board-express데이터베이스의 User라는 테이블에 CRUD 작업을 수행할 수 있는 인터페이스)생성
const User = mongoose.model("User", userSchema);
export default User;