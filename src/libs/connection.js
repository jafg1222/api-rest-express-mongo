var mongoose = require('mongoose');
let db;

function connection(params) {
    mongoose.Promise = global.Promise;
    db = mongoose.connect('mongodb://localhost/apiMean', { useMongoClient: true }, function(err) {
        if (err) {
            console.log('this a' + err);
        } else {
            console.log("Connected to database");
        }
    });

    return db;
}

module.exports = connection();