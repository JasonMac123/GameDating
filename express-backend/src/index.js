require("dotenv").config();
const { userDisconnects } = require("./helpers/users");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const io = require("socket.io")(server);
let userList = [];

io.on("connection", (socket) => {
  socket.on("user_connected", (message) => {
    userList.push({ id: socket.id, user: message.id });
  });
  socket.on("disconnect", () => {
    const newList = userDisconnects(userList, socket.id);
    userList = newList;
  });
});

app.use(function (req, res, next) {
  req.io = io;
  req.list = userList;
  next();
});

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

module.exports = app;
