import express from "express";
import { StatusCodes } from "http-status-codes";
import * as dotenv from "dotenv";
dotenv.config();
import expressLimiter from "express-rate-limit";

// routers
import contactRoute from "./routers/contactRoute.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const apiLimiter = expressLimiter({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./public")));
app.use("/api/v1", apiLimiter, contactRoute);

const port = process.env.PORT || 5100;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use(errorHandlerMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(port, (req, res) => {
  console.log(`listening on ${port}...`);
});
