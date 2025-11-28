const User = require("../models/User");

// Register
const registerUser = async (req, res) => {
  try {
    const { name, role, username, password, accessTo } = req.body;

    // Auto designation
    

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const newUser = new User({
      name,
      designation,
      role,
      accessTo: role === "Ass. Convenor" ? accessTo : [role.toLowerCase()],
      username,
      password, // will be auto-hashed in pre("save")
    });

    await newUser.save();

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, getUsers };
