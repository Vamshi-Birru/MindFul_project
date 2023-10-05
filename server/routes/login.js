const express = require("express");
const bcrypt = require('bcryptjs');
const User = require("../models/User");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (req.body.Email === null) res.status(404).send("Incorrect username");
    else {
      const user = await User.findOne({ Email: req.body.Email });
      if (!user) {
        res.status(404).send("Incorrect username");
      }
      else {
        if (req.body.Password === null) res.status(404).send("Incorrect password");
        else {
          const ispassword = await bcrypt.compare(req.body.Password, user.Password);
          if (!ispassword) {
            res.status(404).send("Incorrect password");
          }
          else {
            res.status(200).json(user._id);
          }
        }
      }
    }

  }
  catch (err) {
    console.log("Error: ", err);
  }
})
module.exports = router;