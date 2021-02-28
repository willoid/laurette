let mongoose = require("mongoose");

//define schema
const UsersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    type: String,
    },
});


//create model
module.exports = mongoose.model("User", UsersSchema);