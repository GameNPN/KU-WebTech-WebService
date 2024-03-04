const express = require("express");

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));
router.get("/add-product", (req, res, next) => {
  console.log("Say Wi from middleware");
  res.send(`<body>
  <form action="/product" method="POST"><input type="text" name="message"><button type="submit">Add Product</button></form></body>`);
});

router.get("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
});
module.exports = router