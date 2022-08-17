const dotenv = require("dotenv");

dotenv.config({
  path: "../.env",
});

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  listPerPage: 10,
};
module.exports = config;
