const express = require("express");
const mongoose = require("mongoose");

const data = require("./data.js");
const videos = require("./dbModel.js");

//app config
const app = express();
const PORT = 8000;

//middleware

//DB config

const connection_URL =
  "mongodb+srv://admin:5g7OoaLThavbz14b@cluster0.ohkfw.mongodb.net/tikTok?retryWrites=true&w=majority";

mongoose.connect(connection_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.post("/v2/videos", (req, res) => {
  const dbVideos = req.body;
  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listeren
app.listen(8000, () => console.log("listening on PORT " + PORT));
