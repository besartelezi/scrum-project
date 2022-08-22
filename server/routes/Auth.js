const express = require("express");
const router = express.Router();
const auth = require("../services/Auth");
const authorize = require("../middleware/authorization");

/* REGISTER functionality */
router.post("/register", async function (req, res, next) {
  try {
    res.json(await auth.registerUser(req.body));
  } catch (err) {
    console.error(`Error while registering user`, err.message);
    next(err);
  }
});

/* LOGIN functionality */
router.post("/login", async function (req, res, next) {
  try {
    res.json(await auth.logInUser(req.body));
  } catch (err) {
    console.error(`Error while logging in`, err.message);
    next(err);
  }
});

/* VERIFY functionality */
router.post("/verify", authorize, async function (req, res) {
  try {
    res.json(await auth.verifyUser());
  } catch (err) {
    console.error(`Error while trying to verify user`, err.message);
    next(err);
  }
});

module.exports = router;
