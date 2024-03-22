const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const router = require("./routes/router");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(router);

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}/`);
});
