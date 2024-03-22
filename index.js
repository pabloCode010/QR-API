const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const router = require("./routes/router");
const morgan = require("morgan");
const { handler } = require("./errors/handler");

app.use(morgan("dev"));
app.use("/api/v1", router);
app.use(handler);

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}/`);
});
