const User = require("./model");

exports.createUser = async (request, response, next) => {
  if (!request.body?.firstName || !request.body?.lastName) {
    response
      .status(400)
      .json({ message: `Firstname , lastname or email are required.` });
  }
  const createUser = await User.create({ ...request.body });
  response
    .status(201)
    .json({ message: `New users is created.`, data: createUser });
};


