const router = require('express').Router();
let Measure = require('../models/measures.model');


router.route('/').get((req, res) => {
    Measure.find()
        .then(measures => res.json(measures))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const type = req.body.type;
    const creationDate = Date.parse(req.body.creationDate);
    const value = Number(req.body.value);
    const sensorID = req.body.sensorID;

    const newMeasure = new Measure({
        type,
        creationDate,
        value,
        sensorID,
    });

    newMeasure.save()
        .then(() => res.json('Measure added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:measureID').get((req, res) => {
    Measure.findById(req.params.measureID)
        .then(measure => res.json(measure))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:measureID').delete((req, res) => {
    Measure.findByIdAndDelete(req.params.measureID)
        .then(() => res.json('Measure deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:measureID').post((req, res) => {
    Measure.findById(req.params.measureID)
        .then(measure => {
            measure.type = req.body.type;
            measure.creationDate = Date.parse(req.body.creationDate);
            measure.value = Number(req.body.value);
            measure.sensorID = req.body.sensorID;

            measure.save()
                .then(() => res.json('Measure updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;