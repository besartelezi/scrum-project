function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function validateFields(firstname, lastname, email, username, password, confirmPassword) {
  const errors = [];

  if (!firstname || !lastname || !email || !username || !password || !confirmPassword) {
    errors.push({ message: "One or more fields are empty" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password should be at least 6 characters" });
  }

  if (password !== confirmPassword) {
    errors.push({ message: "Passwords do not match" });
  }

  return errors;
}

module.exports = {
  getOffset,
  emptyOrRows,
  validateFields,
};
