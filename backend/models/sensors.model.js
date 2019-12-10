const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

const sensorSchema = new Schema({
    /*sensorID : {
        type: Number,
        required: true,
    },*/
    location: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: ObjectId,
        required: true
    },
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;