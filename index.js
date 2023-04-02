import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors  from "cors";
import db from "./config/Database.js";
import authRouter from "./routes/indexRoute.js";
const app = express();
dotenv.config();

try {
    await db.authenticate();
    console.log('Database Connected...');
    // await db.sync({alter: true}); //digunakan untuk generate models yang baru dibuat
} catch (error) {
    console.log(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use('/auth',authRouter);

app.listen(3001, ()=>console.log(`Server listening on port 3001`))