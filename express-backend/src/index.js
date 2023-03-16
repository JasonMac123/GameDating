require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const chatApiRoutes = require("./routes/chat.js");
const matchApiRoutes = require("./routes/match.js");

app.use("/api/match", matchApiRoutes);
app.use("/api/chat", chatApiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
