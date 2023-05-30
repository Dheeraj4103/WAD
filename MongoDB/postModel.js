const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: "String",
    username: "String",
    email: "String",
    password: "String",
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", schema);

module.exports = Post;
