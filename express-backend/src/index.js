require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const chatApiRoutes = require("./routes/chat.js");
const matchApiRoutes = require("./routes/match.js");
const userApiRoutes = require("./routes/users.js");

app.use("/api/match", matchApiRoutes);
app.use("/api/chat", chatApiRoutes);
app.use("/api/users", userApiRoutes);

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log("a user connected");
});
