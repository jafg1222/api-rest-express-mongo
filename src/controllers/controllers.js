var notes = require('../model/model-mongo');
var ObjectId = require('mongoose').Types.ObjectId;

// newNote function to agreggate a new note into database
const newNote = (req, res, next) => {
    notes.insertMany(req.body)
        .then((doc) => {
            res.status(201)
        })
        .catch((err, doc) => {
            console.log(err);
            res.status(500);
            next();
        });
}

// findNote function use the _id parameter for the search
const findNote = (req, res, next) => {
    let searchParams = {
        '_id': new ObjectId(req.params.title) // this class convert _id data from request in ObjectID to mongodb
    }
    notes.findOne(searchParams)
        .then((doc) => {
            console.log(res)
            let response = {
                response: {
                    "status": "ok",
                    "http_code": 200,
                    "content-type": "application/json"
                },
                data: doc
            }
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = { newNote, findNote }