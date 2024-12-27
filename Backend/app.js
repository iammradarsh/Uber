const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const allowedOrigins = [
  "http://localhost:5173", // Local frontend
  "https://df1f-2405-201-3019-788c-5980-f5e2-fdb4-c6b9.ngrok-free.app", // Replace with your ngrok frontend URL
];

connectToDb();

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies, headers, etc.
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/backend", (req, res) => {
  res.send("Hello World");
});
app.use("/backend/users", userRoutes);
app.use("/backend/captains", captainRoutes);

module.exports = app;
