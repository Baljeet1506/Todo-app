const { application } = require('express');
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ballu1997',
    database: 'todohandler',
})



module.exports = connection;

