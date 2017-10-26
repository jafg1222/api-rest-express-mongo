var notes = require('../model/model-mongo');
var ObjectId = require('mongoose').Types.ObjectId;

// newNote function to agreggate a new note into database
const newNote = (req, res) => {
        console.log(req.body);
        notes.insertMany(req.body)
            .then((doc) => {
                res.status(201).json({ 'status': '201', 'response': 'ok' }).end();
            })
            .catch((err, doc) => {
                res.status(500).json(err).end();
            });
    }
    // findNote function use the _id parameter for the search
const findNote = (req, res) => {
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
            res.status(200).json(response).end();
        })
        .catch((err) => {
            res.status(500).json(err).end()

        })
}

// allNotes function to find all notes
const allNotes = (req, res) => {            
    notes.find({})
        .then((doc) => {
            let response = {
                response: {
                    "status": "ok",
                    "http_code": 200,
                    "content-type": "application/json"
                },
                data: doc
            }
            res.status(200).json(response).end();
        })
        .catch((err) => {
            res.status(500).json(err).end();
        })
}

const findDeleted = (req,res)=>{    
    let searchParams = {
        '_id': new ObjectId(req.params.id) // this class convert _id data from request in ObjectID to mongodb
    }
    notes.findByIdAndRemove(searchParams)
    .then(doc =>{
        let response = {
            response: {
                "status": "ok",
                "http_code": 200,                
            },
            data: {
                result:true
            }
        }        
        res.status(200).json(response).end();
    })
    .catch(err=>{
        console.log(err);
    })
}

const lastNotes = (req,res)=>{
    let date = new Date();
    date.setDate(date.getDate()-8); //Create the date range limit
    
    notes.find(({date:{$gte: date,$lt:new Date()}})).sort({date:-1}).limit(7) //Sort is OrderBY T-sql -1 des 1 asc limit is a top T-SQL
    .then((doc)=>{
        let response = {
            response:{
            "status":"ok",
            "http_code":200
        },
        data: doc
        };
        res.status(200).json(doc).end();        
    })
    .catch((err)=>{
        res.status(500).json(err).end();
    })
}


module.exports = { newNote, findNote, allNotes,findDeleted,lastNotes }