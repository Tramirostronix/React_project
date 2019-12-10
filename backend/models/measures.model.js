const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

const measureSchema = new Schema({

    type: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    value: {
        type: Number,
        required: true,
    },
    sensorID: {
        type: ObjectId,
        required: true
    },
});

const Measure = mongoose.model('Measure', measureSchema);

module.exports = Measure;