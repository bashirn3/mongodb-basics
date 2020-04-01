var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bashirrn3';

 
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Switched to bashirrn3 database");
   
     var dbase = db.db("bashirrn3");
        dbase.createCollection("interns", function(err, result) {
          if (err) throw err;
          console.log("Interns collection created!");

          db.close();
     }); 
});