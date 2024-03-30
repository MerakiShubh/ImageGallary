import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("images"));

import fileRouter from "./routes/file.router.js";

app.use("/api/v1/", fileRouter);

export { app };
