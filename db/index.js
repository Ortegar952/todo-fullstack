const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://TylerDurden@localhost:5432/todo_app');


module.exports = db;