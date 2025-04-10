import express from 'express';
import cors from 'cors';
import cookiesParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "12kb" }));
app.use(express.static("public"))
app.use(cookiesParser())


export { app };