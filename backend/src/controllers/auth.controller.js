import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  register: async function (req, res) {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res
          .status(400)
          .json({ message: "All fields are required {username, email, password}" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = await newUser.save();

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({ message: "Unable to register user" });
    }
  },
  login: async function (req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required {email, password}" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET is missing from environment variables");
        return res.status(500).json({ message: "Authentication is not configured" });
      }

      const tokenData = {
        id: user._id,
        email: user.email,
      };

      const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: "8h",
      });

      return res.json({
        token,
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Unable to login" });
    }
  },
};

export default authController;
