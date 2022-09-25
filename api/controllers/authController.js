const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function jwtUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign({ id: user.id }, "JWT_SECRET", {
    expiresIn: ONE_WEEK,
  });
}

// create main Model:
const User = db.users;

// register:
const register = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user)
      return res.status(403).json({ error: "This email is already in use" });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.create();

    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// login:
const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user)
      return res.status(403).json({ error: "Your information is not correct" });

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid)
      return res.status(403).json({ error: "Your information is not correct" });

    const { password, ...others } = user.dataValues; // -> trong MongoBD thì user._doc. Còn trong SQL thì user.dataValues !;
    const token = jwtUser(user);

    return res.status(200).json({ ...others, token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  register,
  login,
};
