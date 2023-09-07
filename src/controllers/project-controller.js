import Info from "../models/PersonalInfo.js";

export const postAnswers = async (req, res) => {
  try {
    const newInfo = new Info({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    // Save the newInfo instance to the database
    await newInfo.save();

    // Respond with the created document
    res.status(201).json(newInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving the personal info.");
  }
};
