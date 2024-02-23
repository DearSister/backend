import User from "../../model/User.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ Mess: "Enter ALl the Values" });
      return;
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).json({ Mess: "Emaill Already Exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log(newUser);
    res.status(201).json({ message: "User registered Suceesfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ Error: err.message });
    return;
  }
});
export default router;
