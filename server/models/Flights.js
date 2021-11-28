const mongoose = require('mongoose');
const AirlineSchema = new mongoose.Schema({
    
    From: {
        type: String,
        required: true,
    },

    To: {
        type: String,
        required: true,
    },

    FlightDate: {
        type: String,
        required: true,
    },

    Cabin: {
        type: String,
        required: true,
        // enum: ['First', 'Business', 'Economy'],
        // default: 'Economy'
    },

    SeatsAvailableOnFlight: {
        type: String,
        required: true,
    }
});

const AirlineModel = mongoose.model('flights', AirlineSchema);
module.exports = AirlineModel;