const http = require("http");
const express = require("express");
const { createUser } = require("./user");
const { createPost } = require("./createPost");
const { sendProducts } = require("./sendProducts");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "ping pong" });
});
app.post("/signup", createUser);
app.post("/createPost", createPost);
app.get("/products", sendProducts);

const server = http.createServer(app);

server.listen(8000, "127.0.0.1", function () {
  console.log("Listening to requests on port 8000");
});
