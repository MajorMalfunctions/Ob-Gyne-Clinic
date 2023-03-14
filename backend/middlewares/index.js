// const protect = require("./protect");
const auth = require("./auth");
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const logEvents = require("./logEvents");

module.exports = {
  auth,
  authJwt,
  verifySignUp,
  // protect,
  logEvents
};