/*|-------------|
  |   Requires  |
  |-------------|*/

// Require from express module
const express = require('express');
// Require the necessary controllers
const controllers = require('../controllers/controllers');
// routes variable
const routes = express.Router();

/*|--------------|
  | Methods POST |
  |--------------|*/

// agregate notes
routes.post('/notes', controllers.newNote);

/*|-------------|
  | Methods GET |
  |-------------|*/

// Find notes but tittle
routes.get('/notes/:title', controllers.findNote);
// Find all notes
routes.get('/notes', controllers.allNotes);
// Find top last notes
routes.get('/lastNotes',controllers.lastNotes);


/*|----------------|
  | Methods DELETE |
  |----------------|*/

routes.delete('/notes/:id',controllers.findDeleted);

/*|----------------|
  | Exports Module |
  |----------------|*/

module.exports = routes