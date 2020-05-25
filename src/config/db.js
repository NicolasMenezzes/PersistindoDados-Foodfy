const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password: "nicolas",
    host: "localhost",
    port: 5432,
    database: "foodfy"
})