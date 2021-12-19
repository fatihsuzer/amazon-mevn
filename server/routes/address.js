const router = require("express").Router();
const Address = require("../models/address");
const verifyToken = require("../middlewares/verify-token");

router.post("/addresses", verifyToken, async (req, res) => {
  try {
    let address = new Address();
    let {
      country,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumber,
      deliverInstructions,
      securityCode,
    } = req.body;
    address.user = req.decoded._id;
    address.country = country;
    address.fullName = fullName;
    address.streetAddress = streetAddress;
    address.city = city;
    address.state = state;
    address.zipCode = zipCode;
    address.phoneNumber = phoneNumber;
    address.deliverInstructions = deliverInstructions;
    address.securityCode = securityCode;

    await address.save();
    res.json({
      success: true,
      message: "Successfully added an adress",
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.get("/addresses", verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({ user: req.decoded._id });

    res.json({
      success: true,
      addresses: addresses,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = router;
