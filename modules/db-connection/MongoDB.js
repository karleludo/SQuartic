const mongoose = require('mongoose');

let mongoDbUrl = (process.env.DB_URL) ? process.env.DB_URL : 'mongodb://localhost:27017/ssspeakDB';

let mongoDbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const dbInit = () => {mongoose.connect(mongoDbUrl, mongoDbOptions, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected to db successfully');
  }
})};

module.exports.dbInit = dbInit;
