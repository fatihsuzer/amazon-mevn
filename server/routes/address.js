const router = require("express").Router();
const Address = require("../models/address");
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token");
const axios = require("axios");

//POST - Create an address
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
      message: "Successfully added an address",
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

//GET - Get all addresses
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
//GET - Get single address
router.get("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let address = await Address.findOne({ _id: req.params.id });

    res.json({
      success: true,
      address: address,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET - Get list of countries
router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("https://restcountries.com/v3.1/all");

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

//PUT - Update address or create if not exist
router.put("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let foundAddress = await Address.findOne({
      user: req.decoded._id,
      _id: req.params.id,
    });
    if (foundAddress) {
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

      if (country) foundAddress.country = country;
      if (fullName) foundAddress.fullName = fullName;
      if (streetAddress) foundAddress.streetAddress = streetAddress;
      if (city) foundAddress.city = city;
      if (state) foundAddress.state = state;
      if (zipCode) foundAddress.zipCode = zipCode;
      if (phoneNumber) foundAddress.phoneNumber = phoneNumber;
      if (deliverInstructions)
        foundAddress.deliverInstructions = deliverInstructions;
      if (securityCode) foundAddress.securityCode = securityCode;

      await foundAddress.save();

      res.json({
        success: true,
        message: "Successfully updated address",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

// DELETE - Delete address
router.delete("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let deletedAddress = await Address.remove({
      user: req.decoded._id,
      _id: req.params.id,
    });

    if (deletedAddress) {
      res.json({
        success: true,
        message: "Address has ben deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});
//PUT - Set an address as default
router.put("/addresses/set/default", verifyToken, async (req, res) => {
  try {
    const updatedAddress = await User.findOneAndUpdate(
      { _id: req.decoded._id },
      { $set: { address: req.body.id } }
    );
    console.log(updatedAddress);
    if (updatedAddress) {
      res.json({
        success: true,
        message: "Successfully set this address as default",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = router;
