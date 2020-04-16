
var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bashirrn3';

 
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Switched to bashirrn3 database");
   
     var dbase = db.db("bashirrn3");
  
         dbase.collection("myMovies").findOne({}, function(err, result) {
          if (err) throw err;
          console.log('The first document in the collection is \n');
          console.log(result);

          db.close();
     }); 
          
          dbase.collection("myMovies").find({rating:7}).toArray(function(err, result) {
            if (err) throw err;
            console.log('The list of movies with rating of 7 are: \n');
            console.log(result);
            db.close();
          });
        
          dbase.collection("myMovies").find({}, { projection: { _id: 0, year: 0, rating: 0 } }).toArray(function(err, result) {
            if (err) throw err;
            console.log('Only movie titles: \n');
            console.log(result);
            db.close();
         });

});
