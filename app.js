const express = require("express");
const path = require("path");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
connectDB();
const app = express();
const port = 3000;
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); //
app.use("/static", express.static(path.join(__dirname, "Static Files")));
app.use("/api/auth", authRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is up and running at PORT:", port);
  } else {
    console.log("error, server can't start");
  }
});
