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
    const country = req.body.country;
    const houseSize = req.body.houseSize;

    const newUser = new User({
       // userID,
       country,
       personsInHouse,
       houseSize
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;