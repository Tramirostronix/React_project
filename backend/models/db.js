const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
///const dbName = "db_project";
const dbUrl = `mongodb+srv://Alii:<password>@cluster0-gnyhe.mongodb.net/test?retryWrites=true&w=majority`;

// connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  /*useFindAndModify : false,
  useUnifiedTopology: true,
  dbName : dbName*/
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.once('open', function() {
  console.log('You are connected to database');
});

module.exports = db;