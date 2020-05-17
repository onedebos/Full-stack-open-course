require("dotenv/config");

const DB_LINK = process.env.DB_LINK;
const PORT = process.env.PORT || 3003;

module.exports = {
  DB_LINK,
  PORT
};
