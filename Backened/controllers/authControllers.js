const userModal = require("../models/userModel");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

let signIn = async (req, res) => {
  let { name, email, password } = req.body;

  let checkEmail = await userModal.findOne({ email });
  if (checkEmail) {
    return res.send({
      status: false,
      message: "Email already exist",
    });
  }

  let hashPass = await bcrypt.hash(password, 10);
  let insertObj = new userModal({
    name,
    email,
    password: hashPass,
  });

  insertObj.save().then(() => {
    res.send({
      status: true,
      message: "You are signed in!",
    });
  });
};
let login = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModal.findOne({ email });

  if (!user) {
    return res.send({
      status: false,
      message: "user not exist",
    });
  }
  let isPassswordCorrect = await bcrypt.compare(password, user.password);
  if (isPassswordCorrect) {
    let token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:  process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.send({
      status: true,
      message: "You are logined in",
    });
  } else {
    res.send({
      status: false,
      message: "Incorrect email or password",
    });
  }
};

let logout = (req, res) => {
  res.clearCookie("token");
  return res.send("logout");
};

let profile = (req, res) => {
  res.send(req.user);
};
module.exports = { signIn, login, logout, profile };
