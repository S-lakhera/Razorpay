import User from "../../models/user.js";

async function createUser(data) {
  const { name, email, password } = data;
  const user = await User.create({ name, email, password });
  return user;
}

async function findByEmail(email) {
  const user = await User.findOne({ email }).select("+password");
  return user;
}

async function findById(id) {
  const user = await User.findById(id);
  return user;
}

export { createUser, findByEmail, findById };
