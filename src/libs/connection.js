var mongoose = require('mongoose');
let db;

function connection(params) {
    mongoose.Promise = global.Promise;
    db = mongoose.connect('mongodb://jafg22:jafg.2017@ds239587.mlab.com:39587/apitest22', { useMongoClient: true }, function(err) {
        if (err) {
            console.log('this a' + err);
        } else {
            console.log("Connected to database");
        }
    });

    return db;
}

module.exports = connection();