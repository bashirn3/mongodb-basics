var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bashirrn3';

mongoClient.connect(url, function (err, db) {

if (err) throw err;

console.log('Database created by bashirrn3');

db.close();

});