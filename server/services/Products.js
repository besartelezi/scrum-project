const helper = require("../helper");
const db = require("./dbConfig");

async function getProducts() {
    const rows = await db.query(`SELECT * FROM "products"`);
    const data = helper.emptyOrRows(rows);
    const response = data.rows;

    return {
        response
    };
}

async function getProductById(id){
    const result = await db.query(`SELECT product_name, amount, price, long_description, short_description, image FROM products
                                   WHERE id = $1`, [id]);
    const response = result.rows[0];

    return {
        response
    };
}

async function getProductByName(name){
    const result = await db.query(`SELECT product_name, amount, price, long_description, short_description, image FROM products
                                   WHERE product_name = $1`, [name]);
    const response = result.rows[0];

    return {
        response
    };
}

async function createProduct(product) {
    const result = await db.query(
        `INSERT INTO "products" (product_name, amount, price, category_id, post_date,
                                 users_id, long_description, short_description, image, theme_id)
         VALUES ('${product.product_name}', '${product.amount}', '${product.price}', '${product.category_id}',
                 '${product.post_date}', '${product.users_id}',
                 '${product.long_description}', '${product.short_description}', '${product.image}', '${product.theme_id}
                 ')`
    );

    let message = "Error in creating product";

    if (result.rowCount) {
        message = "Product created successfully";
    }

    return {message};
}

async function updateProduct(id, product) {
    const result = await db.query(
        `UPDATE "products"
         SET product_name = '${product.product_name}',
             amount='${product.amount}',
             price = '${product.price}',
             category_id = '${product.category_id}',
             post_date = '${product.post_date}',
             users_id = '${product.users_id}',
             short_description = '${product.short_description}',
             image = '${product.image}',
             theme_id = '${product.theme_id}'
         WHERE id = ${id}`
    );

    let message = "Error in updating product";

    if (result.rowCount) {
        message = "product updated successfully";
    }

    return {message};
}

async function removeProduct(id) {
    const result = await db.query(`DELETE
                                   FROM "products"
                                   WHERE id = ${id}`);

    let message = "Error in deleting product";

    if (result.rowCount) {
        message = "product deleted successfully";
    }

    return {message};
}

module.exports = {
    getProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    removeProduct,

};
