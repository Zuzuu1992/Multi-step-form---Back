import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./databases/mongo.js";
import InfoRouter from "./routes/InfoRouter.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

dotenv.config();
connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   return res.status(200).json({ message: "App works!" });
// });

app.use("/api", InfoRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
