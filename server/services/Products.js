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

async function updateProduct(id, product) {
    const result = await db.query(
        `UPDATE "product" 
    SET product_name = '${product.product_name}', amount='${product.amount}', price = '${product.price}', category_id = '${product.category_id}', post_date = '${product.post_date}', user_id = '${product.user_id}', product_description = '${product.product_description}', image = '${product.image}', theme_id = '${product.theme_id}'
    WHERE id=${id}`
    );

    let message = "Error in updating product";

    if (result.rowCount) {
        message = "product updated successfully";
    }

    return { message };
}

async function removeProduct(id) {
    const result = await db.query(`DELETE FROM "product" WHERE id=${id}`);

    let message = "Error in deleting product";

    if (result.rowCount) {
        message = "product deleted successfully";
    }

    return { message };
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    removeProduct,
};
