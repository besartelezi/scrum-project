const express = require("express");
const router = express.Router();
const products = require("../services/Products");
// const helper = require("../helper");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

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
    const imageData = { url: "error" };
    const upload = multer({ storage }).single("image_url");
    upload(req, res, function (err) {
      if (err) {
        return res.send(err);
      }
      // SEND FILE TO CLOUDINARY
      const cloudinary = require("cloudinary").v2;
      cloudinary.config({
        cloud_name: "dpchxrbum",
        api_key: "329367831935658",
        api_secret: "pJVAthbkoggqLbiHJbBDkEknZWg",
      });
      const path = req.file.path;
      const uniqueFilename = new Date().toISOString();
      cloudinary.uploader.upload(
        path,
        { public_id: `project/${uniqueFilename}`, tags: `project` }, // directory and tags are optional
        async function (err, image) {
          if (err) return res.send(err);
          // remove file from server
          const fs = require("fs");
          fs.unlinkSync(path);
          // return image details
          imageData.url = image.url;
          res.json(await products.createProduct(req.body, imageData.url));
        }
      );
    });
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
