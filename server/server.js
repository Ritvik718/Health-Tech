const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/userModels");
const UserData = require("./models/dataModel");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    dbName: "medical",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
// Routes
app.get("/api", (req, res) => {
  res.send("Hello");
});

app.post("/api/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "An error occurred while signing up" });
  }
});

app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const existingUser = await User.findOne({ email });

    // Check if the user exists and if the passwords match
    if (existingUser && existingUser.password === password) {
      return res.status(200).json({ message: "Logged In" });
    } else {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while signing in" });
  }
});

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post(
  "/api/submit-form",
  upload.fields([{ name: "image" }, { name: "prescription" }]),
  async (req, res) => {
    try {
      const { age, height, weight, symptoms, name } = req.body;

      const userData = new UserData({
        age: parseInt(age),
        height: parseInt(height),
        weight: parseInt(weight),
        symptoms,
        name,
        image: req.files["image"][0].path,
        prescription: req.files["prescription"][0].path,
      });

      // Save FormData to MongoDB
      await userData.save();

      res.status(201).json({ message: "Form data saved successfully" });
    } catch (error) {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while saving form data" });
    }
  }
);

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
