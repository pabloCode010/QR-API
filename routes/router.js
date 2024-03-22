const { Router } = require("express");
const router = Router();

const { generate } = require("../controllers/generate");
const { validateQueries } = require("../middlewares/validateQueries");

router.get("/generate", validateQueries, generate);

module.exports = router;
