var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'dlouvisondpw1001',
    user     : 'monty',
    password : 'some_pass',
    database : 'hackathon'
});

connection.connect(function(err) {
    if (err) throw err;
});

global.db = connection;