const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./libs/connection");
const headers = require('./libs/headers-conf')

//settings
var faviconURL = __dirname + "/public/img/nodejs.png",
    publicDir = express.static(path.join(__dirname, "public")),
    viewDir = path.join(__dirname, "views"),
    app = express();

// settings
app.set("views", viewDir);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(express.static('public'));
app.use(favicon(faviconURL));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(headers);
app.use(routes);

app.listen(app.get('port'), () => {
    console.log("Starting server on http://localhost:" + app.get('port'))
})