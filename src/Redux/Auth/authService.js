import axios from "axios";

const token = localStorage.getItem("token");

// register user with phone
const registerWithPhone = async (data) => {
  let response;
  try {
    response = await axios.post("/user", {
      phone: data,
    });
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// verify otp
const verfiyOtp = async (data) => {
  let response;
  try {
    response = await axios.post("/user/verify-otp", {
      phone: data.phone,
      otp: data.otp,
    });
    // localStorage.setItem('token', response.data.data.tokens.accessToken)
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// user login
const userLogin = async (data) => {
  let response;
  try {
    response = await axios.post("/user/login", {
      phone: data.phone,
      password: data.password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.data.accessToken);
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// get user
const getUser = async () => {
  let response;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    response = await axios.get("/user", config);
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// logout user
const logout = async () => {
  let response;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    response = await axios.post("/user/logout", config);
    localStorage.removeItem("token");
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// reset with phone
const forgetPassword = async (phone) => {
  let response;
  try {
    response = await axios.post("/user/forgot-password", {
      phone,
    });
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

// reset password
const resetPassword = async (data) => {
  let response;
  try {
    response = await axios.post("/user/reset-password", {
      phone: data.phone,
      new_password: data.password,
      confirm_password: data.confirmPassword,
      otp: data.otp,
    });
  } catch (error) {
    response = error.response;
  }
  return response.data;
};

const authService = {
  registerWithPhone,
  verfiyOtp,
  userLogin,
  getUser,
  logout,
  forgetPassword,
  resetPassword,
};

export default authService;
