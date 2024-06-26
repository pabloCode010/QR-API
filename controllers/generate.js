const Boom = require('@hapi/boom');
const qr = require("../qr/new");

const contentType = {
  png: "image/png",
  svg: "image/svg+xml",
};

const generate = async (req, res, next) => {
  try {
    const { text, type, background_color, color, width } = req.query;

    const options = {
      errorCorrectionLevel: "H",
      type,
      width,
      color: {
        dark: `#${color}`,
        light: `#${background_color}`,
      },
    };
    
    const code = await qr.newCode(text, options);

    res.setHeader("Content-Type", contentType[type]);
    res.status(200).end(code);
  } catch (error) {
    next(Boom.internal("an unexpected error occurred"));
  }
};

module.exports = {
  generate,
};
