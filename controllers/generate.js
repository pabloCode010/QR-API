const generate = async (req, res, next) => {
  try {
    const { text } = req.query;
    const code = await qr.toBuffer(text);
    res.set("Content-Type", "image/png");
    res.status(200).end(code);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generate,
};
