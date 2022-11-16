const express = require("express");
const router = express.Router();
const storage = require("node-persist");

const USER = {
  email: "cosmin.vasile@scoalainformala.ro",
  password: "Password123#",
};

router.post("/", async function (req, res) {
  const { email, password } = req.body;

  //user email, pass to search in
  //await storage.getItem('users')
  //users.find(); - search for email and password
  //if exists - return success: true with message

  if (USER.email === email && USER.password === password) {
    res.json({
      success: true,
      message: "Login was ok",
    });
  } else {
    //res.status(404).send("Episode not found");
    res.json({
      success: false,
      message: "Email or password is incorrect!",
    });
  }
});

module.exports = router;
