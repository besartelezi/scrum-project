const db = require("./dbConfig");
const helper = require("../helper");

async function getCategories() {
    const result = await db.query(`SELECT * FROM "category"`);
    const status = helper.catchError(result.rows.length);
    return {
        status,
        resultData : result.rows
    };
}

module.exports = {
    getCategories
}

