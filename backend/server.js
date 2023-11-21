const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.get("/", (req, res) => {
  res.send("Api is running successfully.");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(4000, console.log(`Server started on port: ${PORT}.`));
