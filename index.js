const app = require("express")();
const morgan = require("morgan");
const helmet = require("helmet");
const { PORT, FRONTEND_URL } = require("./config");

// TODO: ADD WINSTON LOGGER

app.use(morgan("dev"));
app.use(helmet());

// WHITELISTED URLS
const whitelistURLS = [FRONTEND_URL];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", whitelistURLS);
  res.setHeader("Access-Control-Allow-Method", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/", (req, res) => {
  return res.redirect(FRONTEND_URL);
});

app.listen(PORT, () => {
  return console.log(
    `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});

module.exports = app;
