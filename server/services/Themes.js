const db = require("./dbConfig");
const helper = require("../helper");

async function getThemes() {
    const result = await db.query(`SELECT * FROM "theme"`);
    const status = helper.catchError(result.rows.length);
    console.log(result)
    return {
        status,
        resultData : result.rows
    };
}

module.exports = {
    getThemes
}

