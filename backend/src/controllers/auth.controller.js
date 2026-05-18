import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  register: async function name(req, res) {
    // Registration logic here

    const { username, email, password } = req.body; // Assuming user data is sent in the request body getting this data from the request body
    console.log(req.body);
    if (!username || !email || !password) {
      return res
        .status(400)
        .json("All fields are required {username, email, password}");
    } //checking if all required fields are provided

    const existinguser = await User.findOne({ email }); //checking if user with the same email already exists
    if (existinguser) {
      return res.status(400).json("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); //hashing the password before saving to the database

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      savedUser,
    });
  },
  login: async function (req, res) {
    // Login logic here

    const { email, password } = req.body; // Assuming login credentials are sent in the request body

    if (!email || !password) {
      return res.status(400).json("All fields are required {email, password}");
    } //checking if all required fields are provided

    const user = await User.findOne({ email }); //checking if user with the provided email exists
    if (!user) {
      return res.status(400).json("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); //comparing the provided password with the hashed password in the database
    if (!isPasswordValid) {
      return res.status(400).json("Invalid email or password");
    }
    const TokenData = {
      id: user._id,
      email: user.email,
    }; //creating a payload for the JWT token

    const token = jwt.sign(TokenData, process.env.JWT_SECRET, {
      expiresIn: "8h",
    }); //signing the JWT token with a secret key and setting an expiration time
    return res.json({ token, message: "Login successful" });
  },
};

export default authController;
