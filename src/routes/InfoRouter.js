import express from "express";
import { postAnswers } from "../controllers/project-controller.js";

const InfoRouter = express.Router();

InfoRouter.post("/personalinfo", postAnswers);

export default InfoRouter;
