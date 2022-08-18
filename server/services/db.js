// const mysql = require("mysql2/promise");
const { Pool } = require("pg");
const config = require("../config");

const pool = new Pool(config.db);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
