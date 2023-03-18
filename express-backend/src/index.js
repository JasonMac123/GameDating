require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const chatApiRoutes = require("./routes/chat.js");
const matchApiRoutes = require("./routes/match.js");
const userApiRoutes = require("./routes/users.js");
const interestApiRoutes = require("./routes/interests.js");
const likeApiRoutes = require("./routes/likes.js");

app.use("/api/match", matchApiRoutes);
app.use("/api/chat", chatApiRoutes);
app.use("/api/users", userApiRoutes);
app.use("/api/interests", interestApiRoutes);
app.use("/api/likes", likeApiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
