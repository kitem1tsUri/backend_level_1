const express = require("express");

const router = express.Router();

const { getUsers ,
    getUser , 
    createUser , 
    updateUser , 
    deleteUser , 
    createPost ,
    updatePost , 
    getPosts 
} = require("./hi");

router
   .get("/", getUsers)
   .post("/", createUser)
//    .get("/:id", getUser)
//    .put("/:id", updateUser )
   .delete("/:id", deleteUser)
   .post("/posts",createPost)
   .patch("/:id", updatePost)
   .post("/:id", getPosts);


module.exports = router;
