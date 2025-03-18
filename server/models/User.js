const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["user", "employer"], default: "user" }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
