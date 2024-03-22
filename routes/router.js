const { Router } = require("express");
const router = Router();
const qr = require("../qr/tools");
const { generate } = require("../controllers/generate");

router.get("/generate", generate);

module.exports = router;
