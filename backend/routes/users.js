var express = require('express');
var router = express.Router();


//const axios = require('axios').default;

var users = [];

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({users});
});

/**
 * GET one user
 */
router.get('/:id', (req, res) => {
  const {userID} = req.params;
  //find user in DB
  const user = _.find(users, ["_id", userID]);

  res.status(200).json({
    message: 'User found!',
    user 
  });
});

module.exports = router;
