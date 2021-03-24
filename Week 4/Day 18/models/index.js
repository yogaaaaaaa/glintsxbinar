const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    username: 'yogaadhi',
    password: 'yoga1234',
    database: 'penjualan',

})

module.exports = connection;



// Make mysql connection
