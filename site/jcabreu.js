/* ***************************************************
 * NAME: James Cameron Abreu
 * DATE: 11/15/2018
 * DESCRIPTION: Main JavaScript file for my personal
 *              nodejs resume website
 * **************************************************/

const http = require('http');

const hostname = '127.0.0.1';

const portUsed = 55850;


// ============ SETUP ==============
var express = require('express');
var app = express();
app.set('port', portUsed);

var exphbs = require("express-handlebars");

app.engine("handlebars", 
  exphbs({defaultLayout: 'main',

  helpers: {

  } // end helpers

}));


app.set("view engine", "handlebars"); // default use ".handlebars" files


// For static pages:
app.use(express.static("public"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var moment = require("moment");



// =========== CONSTANTS ===========






// ========== WEBSITE ==============

app.get("/", function (req, res, next) {
  res.render('home');
});




/*
server.listen(app.get('port'), hostname, () => {
  console.log(`Server running at http://${hostname}:${portUsed}/`);
});
*/

app.listen(app.get('port'), function() {
  console.log(`Express started at ${hostname}:${portUsed}/`);
});






