const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  age: { type: Number, min: 0 },
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
