const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 


require ("dotenv").config(); 

const app = express(); 
const port = process.env.PORT || 3030; 

app.use(cors()); 
app.use(express.json()); 

const url = process.env.ATLAS_URI; 
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true}); 
const connection = mongoose.connection; 
connection.once("open", () => {
    console.log("Connexion à la date base ok :) ")
})

const usersRouter = require ("./routes/users.route"); 

app.use("/users", usersRouter); 
app.listen(port, () => {
    console.log(`serveur sur ${port}`); 
}); 