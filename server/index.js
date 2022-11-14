const express = require("express");
const app = express();
const port = 8080;

app.get("/api/login", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/register", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
