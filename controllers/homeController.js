const User = require("../models/userSchema");

const home = (req, res) => {
  return res.render("home");
};

const signup = (req, res) => {
  return res.render("signup");
};

module.exports.home = home;
module.exports.signup = signup;
