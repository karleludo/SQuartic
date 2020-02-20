const express = require('express'); // import express
const bodyParser = require('body-parser'); // import bodyparser
const mongoose = require('mongoose'); // import mongoose

const app = express();

// bodyparser encode utf-8
app.use(bodyParser.urlencoded({
  extended: true
}));

const port = (process.env.PORT) ? process.env.PORT : 3000;

// listen to port
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log('running successfully at port ' + port);
});

// get index
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// get admin
app.get('/admin', (request, response) => {
  response.sendFile(__dirname + '/admin-login.html');
});

const User = require(__dirname + '/modules/user-model/Admin.js').User;

// post login credentials
app.post('/login', (request, response) => {
  console.log(request.body); //console test TODO:
  User.findOne({username: request.body.username, password: request.body.password}, (err, result) => {
    if(err) {
      console.log(err);
    }
    else if (result) {
      response.send('good credentials'); // TODO: redirect to admin dashboard
    } else {
      response.send('invalid credentials');
    }
  })
});

dbInit = require(__dirname + '/modules/db-connection/MongoDB.js').dbInit;

// call once, never call again
dbInit();

// create admin account test
const createUser = require(__dirname + '/modules/user-model/Admin.js').createUser;

let admin = createUser('testAdminName', 'testPassword'); // test account

// upload admin credentials to db
// TODO: bcrypt password

// admin.save((err) => {
//   if(err) console.log(err);
//   else console.log(admin.username + ' saved successfully');
// });
