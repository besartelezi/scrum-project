const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getProducts(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`SELECT * FROM "product"`);
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    const response = data.rows;

    return {
        response,
        meta,
    };
}

async function createProduct(product) {
    const result = await db.query(
        `INSERT INTO "product" (product_name, amount, price, category_id, post_date, user_id, product_description, image, theme_id) VALUES ('${product.product_name}','${product.amount}','${product.price}','${product.category_id}','${product.post_date}','${product.user_id}','${product.product_description}','${product.image}','${product.theme_id}')`
    );

    let message = "Error in creating product";

    if (result.rowCount) {
        message = "Product created successfully";
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

module.exports = {
    getProducts,
    createProduct,
    updateUser,
    removeUser,
};
