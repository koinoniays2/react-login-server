import 'dotenv/config'
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from './routers/userRouter';
import "./db";

const corsOption = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
};
const app = express();
app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(express.json());

// 라우터
app.get("/", (req, res) => { res.send({ name: "root" }); });
app.use("/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🔵 Sever : http://localhost:${PORT}`)
})