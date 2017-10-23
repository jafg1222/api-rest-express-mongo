var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let NoteSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now },
    body: String,
    flag: Boolean
});

var notesModel = mongoose.model('Notes', NoteSchema);


module.exports = notesModel;