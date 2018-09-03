const colors = require('colors');
const pgp = require('pg-promise');
const promise = require('bluebird');
// const diagnostics = require('./dbDiag');
// const fs = require('fs');
{
  colors; // To shut up eslint
}
const initOptions = {
  promiseLib: promise,
  capSQL: true,
};

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // ssl: {
  //   rejectUnauthorized: false,
  //   ca: fs.readFileSync('/home/tom/.postgresql/root.crt').toString(),
  //   key: fs.readFileSync('/home/tom/.postgresql/postgresql.key').toString(),
  //   cert: fs.readFileSync('/home/tom/.postgresql/postgresql.crt').toString(),
  // },
};

// Create the database instance:
const db = pgp(initOptions)(config);

// Load and initialize optional diagnostics:
// diagnostics.init(initOptions);

module.exports = db;
