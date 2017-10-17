const express = require('express');
const controllers = require('../controllers/controllers')
const routes = express.Router();

routes.get('/', (req, res, next) => {});

// Method POST to agregate notes
routes.post('/notes', controllers.newNote);

routes.get('/notes/:title', controllers.findNote);

module.exports = routes