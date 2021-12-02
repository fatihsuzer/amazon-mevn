const router = require("express").Router();
const Product = require("../models/product");

router.post("/products", async (req, res) => {
  try {
    let { title, description, photo, price, stockQuantity } = req.body;
    let product = new Product();

    product.title = title;
    product.description = description;
    product.photo = photo;
    product.price = price;
    product.stockQuantity = stockQuantity;
    await product.save();
    res.json({
      status: true,
      message: "Succesfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
