// environment variables
require( 'dotenv' ).config();

var express = require( 'express' );
var app = express();

const bodyParser = require('body-parser');

var path = require('path');
var router = require( './router' );

var mongoose = require( 'mongoose' );

app.use( '/', router );

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../../dist')));

// connect to db
mongoose.connect( process.env.DB_URI );

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



const port = process.env.PORT || '3000';
app.set('port', port);

app.listen( port, function () {
    console.log( 'Listen of port ' + port );
} );