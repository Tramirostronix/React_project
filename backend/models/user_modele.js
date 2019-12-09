import { stringify } from "querystring";

const userSchema = new mongoose.Schema({
    userID: {
        type: int, 
        required: true
    },
    
    location: {
        type: String, 
        required: true
    }, 

    personsInHouse: {
        type: int, 
        required: true
    }, 

    houseSize : {
        type: String, 
        required: true
    }

}); 

const User = module.exports = mongoose.model("User", userSchema); 