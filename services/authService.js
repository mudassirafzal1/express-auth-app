const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/token");

const AuthService = {
  async register(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("Email is already registered");
    }
    const newUser = new User(userData);
    return await newUser.save();
  },

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Invalid credentials");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refreshToken to DB
    await User.updateOne(
      { _id: user._id },
      { $push: { refreshTokens: refreshToken } }
    );

    return { accessToken, refreshToken };
  },

  async refreshToken(refreshToken) {
    const user = await User.findOne({ refreshTokens: refreshToken });
    if (!user) throw new Error("Invalid refresh token");

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    return generateAccessToken(user);
  },
};

module.exports = AuthService;
