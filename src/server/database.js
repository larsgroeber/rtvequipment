let Equip = require( '../models/equip' );

const equip_seed = [
    { id: 0, name: 'Kamera', location: 'Studio', borrower: "Lars" },
    { id: 1, name: 'Kamera2', location: 'Studio' },
    { id: 2, name: 'Stativ', location: 'Studio' },
];

module.exports = {
    getEquipments: (req, res) => {
        Equip.find( {}, ( err, equips ) => {
            if (err) {
                res.status(404);
                res.send( 'Error, retrieving equipmentList.' );
            }
            res.send( equips );
            console.log( "Returned equipments" );
        })
    },
    removeEquipment: (req,res) => {
        Equip.remove( { _id: req.body._id }, (err) => {
            if (err) {
                res.status(500);
                throw err;
            }
            console.log( "Deleted " + req.body.name );
            res.status(204);
            res.send( "" );
        } )
    },
    createEquipment: (req,res) => {
        const equip = new Equip({
            name: req.body.name,
            location: req.body.location,
            borrower: req.body.borrower
        });

        equip.save((err) => {
            if (err) {
                res.status(500);
                throw err;
            }
            res.status(201);
            res.send(equip);
        });
    },
    updateEquipment: (req, res) => {
        Equip.findOne( { id: req.body.id }, (err, equip) => {
            if ( equip ) {
                equip.name = req.body.name;
                equip.location = req.body.location;
                equip.borrower = req.body.borrower;

                equip.save((err) => {
                    if (err) {
                        res.status(500);
                        throw err;
                    }
                    res.status(201);
                    res.send(equip);
                });
            } else {
                res.status( 500 );
                res.send("Error finding equipment");
            }
        } )
    },
    seedEquipment: (req, res) => {
        Equip.remove( {}, () => {
            for (let e of equip_seed) {
                let newEquip = new Equip(e);
                newEquip.save();
            }
        });

        res.send( "Seeded" );
    }
};