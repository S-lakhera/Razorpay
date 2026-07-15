import axios from "./axios.js";

// Login a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("/user/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Register a user
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post("/user/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Logout a user
export const logoutUser = async () => {
  try {
    const response = await axios.post("/user/logout");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get user profile
export const getProfile = async () => {
  try {
    const response = await axios.get("/user/profile");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
