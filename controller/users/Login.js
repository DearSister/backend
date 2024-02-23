import express from "express";
import User from "../../model/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = await req.body;
    // console.log(email);
    if (!email || !password) {
      res.status(200).json({ Message: "Please Provide all Values" });
      return;
    }
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      res.status(200).json({ Message: "Email Not Found" });
      return;
    }

    res.status(200).json({ mess: "Correct " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
