const express = require("express");
const router = express.Router();
const products = require("../services/Products");

/* GET products. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await products.getProducts(req.query.page));
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* POST product */
router.post("/", async function (req, res, next) {
  try {
    res.json(await products.createProduct(req.body));
  } catch (err) {
    console.error(`Error while creating product`, err.message);
    next(err);
  }
});

/* PUT product */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await products.updateProduct(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});
/* DELETE product */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await products.removeProduct(req.params.id));
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});

module.exports = router;
