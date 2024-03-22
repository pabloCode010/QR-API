const Joi = require("joi");
const color = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const queries = Joi.object({
  text: Joi.string().min(1).required(),
  type: Joi.string().valid("png", "svg").default("png"),
  width: Joi.number().min(33).default(250),
  color: Joi.string().regex(color).default("000"),
  background_color: Joi.string().regex(color).default("fff"),
});

module.exports = {
  queries,
};
