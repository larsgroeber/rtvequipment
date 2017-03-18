var express = require( 'express' );

var database = require( './database' );
const bodyParser = require('body-parser');

var router = express.Router();
router.use( bodyParser.json() );

module.exports = router;

router.get( '/router', function (req, res) {
    res.send( 'Router works' )
});

router.get( '/api/equipment/get', (req, res) => {
    database.getEquipments(req, res);
} );

router.post( '/api/equipment/create', (req, res) => {
    database.createEquipment(req, res);
});

router.post( '/api/equipment/delete', (req, res) => {
    database.removeEquipment(req, res);
});

router.post( '/api/equipment/update', (req, res) => {
    database.updateEquipment(req, res);
});

router.get( '/api/equipment/seed', (req, res) => {
    database.seedEquipment( req, res );
});