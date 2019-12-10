const router = require('express').Router();
let Sensor = require('../models/sensors.model');


router.route('/').get((req, res) => {
    Sensor.find()
        .then(sensors => res.json(sensors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const location = req.body.location;
    const creationDate = Date.parse(req.body.creationDate);
    const userID = req.body.userID;

    const newSensor = new Sensor({
        location,
        creationDate,
        userID,
    });

    newSensor.save()
        .then(() => res.json('Sensor added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:sensorID').get((req, res) => {
    Sensor.findById(req.params.sensorID)
        .then(sensor => res.json(sensor))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:sensorID').delete((req, res) => {
    Sensor.findByIdAndDelete(req.params.sensorID)
        .then(() => res.json('Sensor deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:sensorID').post((req, res) => {
    Sensor.findById(req.params.sensorID)
        .then(sensor => {
            //sensor.sensorID = Number(req.body.sensorID);
            sensor.location = req.body.location;
            sensor.creationDate = Date.parse(req.body.creationDate);
            sensor.userID = req.body.userID;

            sensor.save()
                .then(() => res.json('Sensor updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;