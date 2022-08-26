const helper = require("../helper");
const db = require("./dbConfig");

async function getProducts() {
  const result = await db.query(`SELECT * FROM "products"`);
  const status = helper.catchError(result.rows.length);
  return {
    status,
    resultData: result.rows,
  };
}

async function getProductById(id) {
  const result = await db.query(
    `SELECT product_name, amount, price, long_description, short_description, image FROM products
                                   WHERE id = $1`,
    [id]
  );
  const status = helper.catchError(result.rows.length);
  return {
    status,
    resultData: result.rows[0],
  };
}

async function getProductByName(name) {
  const result = await db.query(
    `SELECT product_name, amount, price, long_description, short_description, image FROM products
                                   WHERE product_name = $1`,
    [name]
  );
  const status = helper.catchError(result.rows.length);
  return {
    status,
    resultData: result.rows[0],
  };
}

async function getProductsByUserId(id) {
  const result = await db.query(
    `SELECT id, product_name, amount, price, post_date, long_description, short_description, image FROM products
                                   WHERE users_id = $1`,
    [id]
  );
  const status = helper.catchError(result.rows.length);
  return {
    status,
    resultData: result.rows,
  };
}

async function createProduct(product, imageUrl) {
  const result = await db.query(
    `INSERT INTO "products" (product_name, amount, price, category_id, post_date,
                                 users_id, long_description, short_description, image, theme_id)
         VALUES ('${product.product_name}', '${product.amount}', '${product.price}', '${product.category_id}',
                 '${product.post_date}', '${product.users_id}',
                 '${product.long_description}', '${product.short_description}', '${imageUrl}', '${product.theme_id}
                 ')`
  );

  let message = "Error in creating product";

  if (result.rowCount) {
    message = "Product created successfully";
  }

  return { message };
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

  return { message };
}

async function removeProduct(id) {
  const result = await db.query(`DELETE
                                   FROM "products"
                                   WHERE id = ${id}`);

  let message = "Error in deleting product";

  if (result.rowCount) {
    message = "product deleted successfully";
  }

  return { message };
}

async function getProductsByCategory(id) {
  const result = await db.query("SELECT * FROM products WHERE category_id = $1", [id]);

  const data = result.rows;

  let message = "Error in getting products by category";

  if (result.rowCount) {
    message = "Fetching products by category was successful.";
  }

  return { data, message };
}

// Get Product By Theme
async function getProductByTheme(id) {
  const result = await db.query("SELECT * FROM products WHERE theme_id = $1", [id]);

  const data = result.rows;

  let message = "Error in getting products by theme";

  if (result.rowCount) {
    message = "Fetching products by theme was successful.";
  }
  return { data, message };
}

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  getProductsByUserId,
  createProduct,
  updateProduct,
  removeProduct,
  getProductsByCategory,
  getProductByTheme,
};
