const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorization");
const dashboard = require("../services/Dashboard");

/* DASHBOARD functionality */
router.get("/", authorize, async function (req, res, next) {
  try {
    res.json(await dashboard.dashboardUser(req.user.id));
  } catch (err) {
    console.error(`Error while trying to access user dashboard`, err.message);
    next(err);
  }
});

module.exports = router;
