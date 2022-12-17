const { response } = require("express");
const { put, post } = require("./router");

const users = [
  { id: 1, firstName: "saraa", lastName: "naraa" },
  { id: 2, firstName: "tsetsgee", lastName: "haliuaa" },
];

let posts = [
  {
    id: "1",
    title: "hi",
    message: "hi",
  },
];

// buh user iin medeelel ugj baiga
exports.getUsers = (request, response, next) => {
  response.status(200).json({
    users: users,
  });
};

// buh post nii medeelel ugdug
exports.getPosts = (request, response, next) => {
  response.status(200).json({
    posts: posts,
  });
};

// user nemeh

exports.createUser = (request, response, next) => {
  users.push({ id: users.length + 1, ...request.body });
  response.status(400).json({ message: `New user is created.` });
};
// postnemeh

exports.createPost = (request, response, next) => {
  const { title, message } = request.body;
  posts.push({
    id: posts.length + 1 + "",
    title: title,
    message: message,
  });

  response.status("400").json(posts);
};
exports.getUser = (request, response, next) => {
  const { id } = request.params;
  if (id > users.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exixt` });
  } else {
    response.status(200).json(users[parseInt(id) - 1]);
  }
};
exports.updatePost = (request, response, next) => {
  const { title, message } = request.body;
  const { id } = request.params;
  posts[id - 1] = {
    id: id,
    title: title,
    message: message,
  };
  response.json(posts);
};
exports.updateUser = (request, response, next) => {
  const { id } = request.params;
  if (id > users.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exixt` });
  } else {
    response
      .status(200)
      .json({ message: `User with ${request.params.id} id is updated` });
  }
};

exports.deletePost = (request, response, next) => {
  const { id } = request.params;
  const otherPost = posts.filter((cur) => cur.id !== id);

  posts = otherPost;

  response.status(200).json(posts);
};

exports.deleteUser = (request, response, next) => {
  if (id > users.length) {
    const { id } = request.params;
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exixt` });
  } else {
    response
      .status(200)
      .json({ message: `User with ${request.params.id} id is deleted` });
  }
};
