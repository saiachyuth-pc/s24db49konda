const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
instrument_type: String,
instrument_size: String,
instrument_price: Number
})
module.exports = mongoose.model("instrument",
instrumentSchema)