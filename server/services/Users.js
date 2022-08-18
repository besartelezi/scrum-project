const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getUsers(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
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
    `INSERT INTO "user" (firstname, lastname, email, username, password) VALUES (${user.firstname}, ${user.lastname}, ${user.email}, ${user.username}, ${user.password})`
  );

  let message = "Error in creating programming language";

  if (result.affectedRows) {
    message = "Programming language created successfully";
  }

  return { message };
}

async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE programming_languages 
    SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
    pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank} 
    WHERE id=${id}`
  );

  let message = "Error in updating programming language";

  if (result.affectedRows) {
    message = "Programming language updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM programming_languages WHERE id=${id}`);

  let message = "Error in deleting programming language";

  if (result.affectedRows) {
    message = "Programming language deleted successfully";
  }

  return { message };
}

module.exports = {
  getUsers,
  createUser,
  update,
  remove,
};
