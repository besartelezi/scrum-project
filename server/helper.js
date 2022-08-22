function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function validEmail(userEmail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
}

function validateFields(firstname, lastname, email, username, password, confirmPassword, address) {
  const errors = [];

  if (!validEmail(email)) {
    errors.push({ message: "Email is not valid" });
  }

  if (!firstname || !lastname || !email || !username || !password || !confirmPassword || !address) {
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
