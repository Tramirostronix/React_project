const express = require('express');
var router = express.Router();
const _ = require('lodash');
let mongoose= require("mongoose"); 
let User = require("../models/user_modele"); 

//POST 

router.post('/add', (req, res) => {
  res.status(200).json({users}); 
})


/* GET users listing. */
router.get('/users', (req, res) => {
  res.status(200).json({users});
});

/**
 * GET one user by ID
 */
router.get('/:userID', (req, res) => {
  const {userID} = req.params;
  //find user in DB
  const user = _.find(users, [":userID", userID]);

  res.status(200).json({
    message: 'User found!',
    user 
  });
});

module.exports = router;
