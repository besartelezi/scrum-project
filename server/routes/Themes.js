const express = require("express");
const router = express.Router();
const themes = require("../services/Themes");

/* GET all Categories. */
router.get("/", async function (req, res, next) {
    try {
        res.json(await themes.getThemes());
    } catch (err) {
        console.log(err);
        next(err);
    }
});

module.exports = router;