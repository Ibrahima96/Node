const User = require("./models/User");
const Post = require("./models/Post");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/bicomBD");
  console.log("ok");
  //   const user1 = new User({
  //     email: "gooddays@happy.up",
  //     firstname: "Violet",
  //     lastname: "Rare",
  //     age: 23,
  //   });

  //await user1.save()

  //   const user2 = await User.create({
  //     email: "honny@happy.up",
  //     firstname: "Honny",
  //     age: 22,
  //   });

  //get data of db
  //   const users = await User.find().select('firstname -_id')
  // const honny = await User.findById("69333a6f18483acab745c2ea");
  // honny.lastname="groovly"
  // console.log(honny);
  // await honny.save()

  //recuperation des auteur
  // const Honny = await User.findOne({
  //   firstname: "Honny",
  // });
  // const Violet = await User.findOne({
  //   firstname: "Violet",
  // });
  // console.log(Violet, Honny);

  //creer un article (posts)

  // await Post.create({
  //   title: "le sommet",
  //   content: "lorem.....Lorme🤩🤩🤩🤩",
  //   status: "PUBLISHED",
  //   author: Honny._id,
  // });
  // await Post.create({
  //   title: "le sommet",
  //   content: "lorem.....ship🧑‍🎤🧑‍🎤🫰",
  //   status: "DRAFT",
  //   author: Violet._id,
  // });

  const posts = await Post.find().populate('author')
  console.log(posts)
  mongoose.disconnect();
}

main();
