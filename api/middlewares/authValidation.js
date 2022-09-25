const Joi = require("joi");

module.exports = {
  // Check xem đầu vào của email khi register có valid hay không?
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,32}$")),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          return res
            .status(400)
            .json({ error: "You must provide a valid email!" });

        case "password":
          return res.status(400).json({
            error:
              "The password provided failed to match the following rules: \n" +
              "\n 1. It must contain ONLY the following characters: lower case, upper case, numerics \n" +
              "2. It must be at least 8 - 32 characters in length \n",
          });

        default:
          return res
            .status(400)
            .json({ error: "Invalid registration information" });
      }
    } else {
      next();
    }
  },
};
