const authController = require("../controllers/authController");
const express = require("express");

const authValidation = require("../middlewares/authValidation");

// route creating:
const router = express.Router();

// register:
router.post("/register", authValidation.register, authController.register);

// register:
router.post("/login", authController.login);

module.exports = router;
