const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const authController = require("../controllers/authController");
const verifyRoute = require("../routes/verifyRoute");

router.get("/:token", verifyRoute, (req, res) => {
  User.findById(req.user._id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
