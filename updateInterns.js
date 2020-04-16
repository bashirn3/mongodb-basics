var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bashirrn3';

 
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Switched to bashirrn3 database");
   
     var dbase = db.db("bashirrn3");

        var myquery = { movie: "The Banker" };
        var newvalues = { $set: {movie: "Troy", year: "2004", rating: 9} };

        dbase.collection("myMovies").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated")
          console.log(res.result);
          db.close();
        });


         dbase.collection("myMovies").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log('the updated collection is now');
          console.log(result);
          db.close();
     }); 
});
