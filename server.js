import express from "express";
import { StatusCodes } from "http-status-codes";
import * as dotenv from "dotenv";
dotenv.config();

// routers
import contactRoute from "./routers/contactRoute.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.static(path));
app.use("/api/v1", contactRoute);

const port = process.env.PORT || 5100;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use(errorHandlerMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(port, (req, res) => {
  console.log(`listening on ${port}...`);
});
