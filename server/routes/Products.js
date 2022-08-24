const express = require("express");
const router = express.Router();
const products = require("../services/Products");

/* GET products. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await products.getProducts());
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* GET product by id. */
router.get("/byid/:id", async function (req, res, next) {
  try {
    res.json(await products.getProductById(req.params.id));
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* GET product by name. */
router.get("/byname/:name", async function (req, res, next) {
  try {
    res.json(await products.getProductByName(req.params.name));
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* GET product by userID. */
router.get("/byuser/:id", async function (req, res, next) {
  try {
    res.json(await products.getProductsByUserId(req.params.id));
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

/* SELECT products by category */
router.get("/bycategory/:id", async function (req, res, next) {
  try {
    console.log(req.params.id)
    res.json(await products.getProductsByCategory(req.params.id));
  } catch (err) {
    console.error(`Error while selecting products by category`, err.message);
    next(err);
  }
});

module.exports = router;
