const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({});

module.exports = mongoose.model("AddressSchema", AddressSchema);
