const db = require("./dbConfig");
const helper = require("../helper");

async function getUsers() {
  const rows = await db.query(`SELECT * FROM "users"`);
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
    `INSERT INTO users (firstname, lastname, email, username, password, address) VALUES ('${user.firstname}','${user.lastname}','${user.email}','${user.username}','${user.password}','${user.address}')`
  );

  let message = "Error in creating user";

  if (result.rowCount) {
    message = "User created successfully";
  }

  return { message };
}

async function updateUser(id, user) {
  const result = await db.query(
    `UPDATE "users" 
    SET firstname = '${user.firstname}', lastname='${user.lastname}', email = '${user.email}', 
    username = '${user.username}', password = '${user.password}' , address = '${user.address}'
    WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.rowCount) {
    message = "User updated successfully";
  }

  return { message };
}

async function removeUser(id) {
  const result = await db.query(`DELETE FROM "users" WHERE id=${id}`);

  let message = "Error in deleting user";

  if (result.rowCount) {
    message = "User deleted successfully";
  }

  return { message };
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser,
};
