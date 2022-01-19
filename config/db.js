const config = require('./')

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DATABASE,

});


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE,
  }
});

module.exports = {
  knex,
  connection
}