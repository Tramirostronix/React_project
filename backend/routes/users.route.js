const router = require ("express").Router(); 
let User= require("../models/users.model"); 

router.route("/").get((req, res) => {
    User.find()
    .then(users =>res.json(users))
    .catch(err => res.status(400).json("error")); 
}); 

router.route("/add").post((req, res) =>{
    const userID = Number(req.body.userID);
    const location = req.body.location; 
    const personsInHouse = Number(req.body.personsInHouse); 
    const houseSize = req.body.houseSize;  

    const newUser = new User({
        userID, 
        location, 
        personsInHouse, 
        houseSize
    }); 

    newUser.save()
    .then(() => res.json("Nouvel utilisateur ajoute"))
})

module.exports= router; 