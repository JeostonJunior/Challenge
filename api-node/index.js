const express = require("express");
const server = express();
const horarios = require("./scr/data/hararios.json");

server.get("/", (req, res) => {
  return res.json(horarios);
});

server.listen(3000, () => {
  console.log("listening on port");
});
