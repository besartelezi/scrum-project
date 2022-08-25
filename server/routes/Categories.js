const express = require("express");
const router = express.Router();
const categories = require("../services/Categories");

/* GET all Categories. */
router.get("/", async function (req, res, next) {
    try {
        res.json(await categories.getCategories());
    } catch (err) {
        console.log(err);
        next(err);
    }
});

module.exports = router;