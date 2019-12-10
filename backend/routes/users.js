const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    //const userID = Number(req.body.userID);
    const personsInHouse = Number(req.body.personsInHouse);
    const location = req.body.location;
    const houseSize = req.body.houseSize;

    const newUser = new User({
       // userID,
       location,
       personsInHouse,
       houseSize
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:userID').get((req, res) => {
    User.findById(req.params.userID)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:userID').delete((req, res) => {
    User.findByIdAndDelete(req.params.userID)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:userID').post((req, res) => {
    User.findById(req.params.userID)
        .then(user => {
            //sensor.sensorID = Number(req.body.sensorID);
            user.location = req.body.location;
            user.personsInHouse = Number(req.body.personsInHouse);
            user.houseSize = req.body.houseSize;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;