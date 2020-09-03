const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  channel: String,
  url: String,
  song: String,
  description: String,
  likes: String,
  comments: String,
  shares: String,
});

module.exports = mongoose.model("tiktokVideos", tiktokSchema);
