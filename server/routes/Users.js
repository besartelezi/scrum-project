const express = require("express");
const router = express.Router();
const users = require("../services/Users");

/* GET users. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await users.getUsers(req.query.page));
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* POST user */
router.post("/", async function (req, res, next) {
  try {
    res.json(await users.createUser(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await users.updateUser(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});
/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await users.removeUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;
