const dev = require("./dev");
const prod = require("./prod");

let PORT, FRONTEND_URL;

if (process.env.NODE_ENV === "production") {
  PORT = prod.port;
  FRONTEND_URL = prod.frontendUrl;
} else {
  PORT = dev.port;
  FRONTEND_URL = dev.frontendUrl;
}

module.exports = {
  PORT: PORT,
  FRONTEND_URL: FRONTEND_URL,
};
