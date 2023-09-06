import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "App works!" });
});

app.listen(process.env.PORT || 3000);
