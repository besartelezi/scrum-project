const db = require("./dbConfig");
const helper = require("../helper");
const bcrypt = require("bcrypt");

async function getUsers() {
  const rows = await db.query(`SELECT * FROM "user"`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  const response = data.rows;

  return {
    response,
    meta,
  };
}

async function createUser(user) {
  const result = await db.query(
    `INSERT INTO users (firstname, lastname, email, username, password) VALUES ('${user.firstname}','${user.lastname}','${user.email}','${user.username}','${user.password}')`
  );

  let message = "Error in creating user";

  if (result.rowCount) {
    message = "User created successfully";
  }

  return { message };
}

async function updateUser(id, user) {
  const result = await db.query(
    `UPDATE "user" 
    SET firstname = '${user.firstname}', lastname='${user.lastname}', email = '${user.email}', 
    username = '${user.username}', password = '${user.password}'
    WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.rowCount) {
    message = "User updated successfully";
  }

  return { message };
}

async function removeUser(id) {
  const result = await db.query(`DELETE FROM "user" WHERE id=${id}`);

  let message = "Error in deleting user";

  if (result.rowCount) {
    message = "User deleted successfully";
  }

  return { message };
}

async function registerUser(user) {
  let { firstname, lastname, email, username, password, confirmPassword } = user;
  let errorsMsg = helper.validateFields(firstname, lastname, email, username, password, confirmPassword);

  if (!errorsMsg.length) {
    errorsMsg.push({ message: "All Fields are valid!" });

    let hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (result.rows.length) {
      errorsMsg.push({ message: "Email already exists" });
    } else {
      const result = await db.query(
        `INSERT INTO users (firstname, lastname, email, username, password)
       VALUES($1, $2, $3, $4, $5)
        RETURNING id, password`,
        [firstname, lastname, email, username, hashedPassword]
      );

      if (result.rowCount) {
        errorsMsg.push({ message: "Registered succesfully" });
      }
    }
  }

  return { errorsMsg };
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser,
  registerUser,
};
