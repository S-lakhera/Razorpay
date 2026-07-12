import * as UserRepo from "./user.repository.js";
import ApiError from "../../utils/ApiError.js";
import generateToken from "../../utils/jwt_token.js";

async function createUser(data) {
  const { name, email, password } = data;
  const isUserExist = await UserRepo.findByEmail(email);
  if (isUserExist) {
    throw new ApiError(400, "User already exists");
  }
  const user = await UserRepo.createUser({ name, email, password });

  user.password = undefined;

  const token = generateToken(user);

  return { user, token };
}

async function loginUser({ email, password }) {
  const user = await UserRepo.findByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid password");
  }

  user.password = undefined;

  const token = generateToken(user);

  return { user, token };
}

export { createUser, loginUser };
