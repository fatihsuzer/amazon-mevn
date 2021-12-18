const router = require("express").Router();
const Review = require("../models/review");
const Product = require("../models/product");
const verifyToken = require("../middlewares/verify-token");
const upload = require("../middlewares/upload-photo");

router.post(
  "/reviews/:productId",
  [verifyToken, upload.single("photo")],
  async (req, res) => {
    try {
      let review = new Review();
      review.headline = req.body.headline;
      review.body = req.body.body;
      review.rating = req.body.rating;
      review.photo = req.file.location;
      review.user = req.decoded._id;
      review.productId = req.params.productId;

      await Product.updateOne({ $push: { rating: review._id } });

      const savedReview = await review.save();

      if (savedReview) {
        res.json({
          success: true,
          message: "Succesfully added Review",
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.get("/reviews/:productId", async (req, res) => {
  try {
    const productReviews = await Review.find({
      productId: req.params.productId,
    })
      .populate("user")
      .exec();

    res.json({
      success: true,
      reviews: productReviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
