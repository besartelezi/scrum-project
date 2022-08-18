const dotenv = require("dotenv");

dotenv.config({
  path: "../.env",
});

const config = {
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  listPerPage: 10,
};
module.exports = config;
