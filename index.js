const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("I got the request");
});

app.post("/", (req, res) => {
  res.status(200).send("I got the request");
});

app.listen("3000", (err) => {
  if (!err) console.log("connected");
});
