const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/goals", require("./routes/goals"));
app.use("/api/users", require("./routes/users"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
