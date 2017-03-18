const mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema;

// create a schema
const equipSchema = new Schema({
    name: {
        type: String,
    },
    location: String,
    borrower: String
});

// middleware


// create the model
const equipModel = mongoose.model( 'Equip', equipSchema );

module.exports = equipModel;