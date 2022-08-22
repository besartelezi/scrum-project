const db = require("./dbConfig");

async function dashboardUser(userId) {
  let resultInfo = { user: undefined };
  const user = await db.query("SELECT firstname, lastname, email, username, address FROM users WHERE id = $1", [userId]);
  resultInfo.user = user.rows[0];

  return resultInfo;
}

module.exports = { dashboardUser };
