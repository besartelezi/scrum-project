const db = require("./dbConfig");
const helper = require("../helper");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

async function registerUser(user) {
  let { firstname, lastname, email, username, password, confirmPassword, address } = user;
  let resultInfo = {
    status: "Unable to register",
    statusInfo: helper.validateFields(firstname, lastname, email, username, password, confirmPassword, address),
    token: undefined,
  };

  if (!resultInfo.statusInfo.length) {
    resultInfo.statusInfo.push({ message: "All Fields are valid!" });

    let hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    const resultUser = await db.query(`SELECT * FROM users WHERE username = $1`, [username]);

    if (result.rows.length) {
      resultInfo.statusInfo.push({ message: "Email already exists" });
    } else if (resultUser.rows.length) {
      resultInfo.statusInfo.push({ message: "Username already exists" });
    } else {
      const result = await db.query(
        `INSERT INTO users (firstname, lastname, email, username, password, address)
         VALUES($1, $2, $3, $4, $5, $6)
          RETURNING id, password`,
        [firstname, lastname, email, username, hashedPassword, address]
      );

      if (result.rowCount) {
        resultInfo.status = "Registered succesfully";
        resultInfo.statusInfo = [];
        resultInfo.token = jwtGenerator(result.rows[0].id);
      }
    }
  }

  return resultInfo;
}

async function logInUser(user) {
  const { email, password } = user;
  let resultInfo = { status: "Failed", statusInfo: [], token: undefined };

  const result = await db.query(`SELECT * FROM users WHERE email=$1`, [email]);

  if (!result.rows.length) {
    resultInfo.statusInfo.push({ message: "Email is not registered" });
  } else {
    const validPassword = await bcrypt.compare(password, result.rows[0].password);

    if (!validPassword) {
      resultInfo.statusInfo.push({ message: "Password is incorrect" });
    } else {
      resultInfo.status = "Success!";
      resultInfo.statusInfo = [];
      resultInfo.token = jwtGenerator(result.rows[0].id);
    }
  }

  return resultInfo;
}

async function verifyUser() {
  return true;
}

module.exports = {
  registerUser,
  logInUser,
  verifyUser,
};
