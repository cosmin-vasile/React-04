const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const login = require("./routes/login");
const register = require("./routes/register");
const storage = require("node-persist");

storage.init({
  dir: "/",
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: "utf8",
  logging: false, // can also be custom logging function
  ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
  expiredInterval: 2 * 60 * 100000, // every 2 minutes the process will clean-up the expired cache
  // in some cases, you (or some other service) might add non-valid storage files to your
  // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
  forgiveParseErrors: false,
});

app.options("*", cors());
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/login", login);
app.use("/api/register", register);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
