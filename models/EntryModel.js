let mongoose = require("mongoose");

//define schema
const EntriesSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    type: String,
    },
});


//create model
module.exports = mongoose.model("Entries", EntriesSchema);