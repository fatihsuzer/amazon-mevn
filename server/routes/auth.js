const router = require("express").Router();
const User = require("../models/user");

const jwt = require("jsonwebtoken");

// Signup Route
router.post("/auth/signup", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, message: "Please enter email or Password" });
  } else {
    try {
      let newUser = new User();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      await newUser.save();
      let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
        expiresIn: 604800, // a week
      });

      res.json({
        success: true,
        token: token,
        message: "Succesfully created a new user",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});

module.exports = router;
