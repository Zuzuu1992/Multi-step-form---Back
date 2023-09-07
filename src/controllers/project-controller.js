import Info from "../models/PersonalInfo.js";

export const postAnswers = async (req, res) => {
  try {
    const newInfo = new Info(req.body);
    const finalInfo = await newInfo.save();
    res.status(201).json(finalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving the personal info.");
  }
};
