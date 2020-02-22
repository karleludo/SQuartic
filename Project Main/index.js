const express = require('express'); // import express
const bodyParser = require('body-parser'); // import bodyparser
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

// bodyparser encode utf-8
app.use(bodyParser.urlencoded({
  extended: true
}));

// css and client side javascript files are located here
app.use(express.static(__dirname + '/public'));

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
  // response.sendFile(__dirname + '/admin-login.html');
  let ejsOptions = {
    errors: null
  }
  response.render('login', ejsOptions);
});

const User = require(__dirname + '/modules/user-model/Admin.js').User;

// post login credentials
app.post('/admin', (request, response) => {
  console.log(request.body); //console test TODO:

  User.findOne({
    username: request.body.username,
    password: request.body.password
  }, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result) {
      // response.send('good credentials');
      response.render('admin-home');
    } else {
      // response.send('invalid credentials');
      let errors = ['invalid credentials'];
      let ejsVariables = {
        errors: errors
      };
      response.render('login', ejsVariables);
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

// run 'mongod' before running 'node index.js'
// uncomment and run once to save admin credentials to db

// admin.save((err) => {
//   if(err) console.log(err);
//   else console.log(admin.username + ' saved successfully');
// });
