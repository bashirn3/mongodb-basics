var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/bashirrn3';

 
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Switched to bashirrn3 database");
   
     var dbase = db.db("bashirrn3");
     var movies =  [ 
            {movie: "The Banker", year: "2020", rating: 8},  
            {movie: "Bad Boys", year: "2020", rating: 7}, 
            {movie: "The Hunt", year: "2020", rating: 7}, 
            {movie: "Bloodshot", year: "2020", rating: 7.5},
            {movie: "First Cow", year: "2020", rating: 6.5} ];

        dbase.collection("myMovies").insertMany(movies, function(err, result) {
          //dbase.collection("myMovies").drop(function(err,result){
          if (err) throw err;
          console.log(result);

          db.close();
     }); 

});
