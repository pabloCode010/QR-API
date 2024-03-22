const { Router } = require("express");
const router = Router();
const qr = require("../qr/tools");

router.get("/generate", async (req, res) => {
  const { text } = req.query;
  const code = await qr.toBuffer(text);

  res.set("Content-Type", "image/png");
  res.status(200).end(code);
});

module.exports = router;
