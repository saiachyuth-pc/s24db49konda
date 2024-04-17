const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
instrument_type: String,
instrument_size: { type: String, minlength: 1, maxlength:25 },
instrument_price: { type: Number, min: 0, max: 25000 }
})
module.exports = mongoose.model("instrument",
instrumentSchema)