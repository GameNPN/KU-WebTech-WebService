const path = require('path');
const express = require("express");
const router = express.Router();
const rootDir = require('../util/path');
const product = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product (ejs)',
  });
});

router.post("/add-product", (req, res, next) => {
  product.push({ title: req.body.title })
  res.redirect('/');
});

exports.routers = router;
exports.products = product;