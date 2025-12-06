const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: String,
  status: {
    type: String,
    enum: ["DRAFT", "PUBLISHED"],
  },

  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model('Post',postSchema)
