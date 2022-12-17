const express = require("express");

const router = express.Router();

const {
  // getUser ,
  createUser,
  updateUser ,
  deleteUser ,
  createPost ,
  deletePost ,
  updatePost ,
  getPosts

} = require("./controller");

router
  //    .get("/", getUsers)
  .post("/", createUser);
//    .get("/:id", getUser)
//    .put("/:id", updateUser )
//  .delete("/:id", deleteUser)
//    .post("/posts",createPost)
//    .patch("/:id", updatePost)
//    .delete("/:id", deletePost)
//    .post("/:id", getPosts);

module.exports = router;
