const express = require('express'); // import express
const bodyParser = require('body-parser'); // import bodyparser
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const app = express();

app.set('view engine', 'ejs');

console.log(Date.now());


//cookieSession
app.use(cookieSession({
  name: 'session',
  secret: 'secret'
}));


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
  response.render('index');
});

// get admin
app.get('/admin', (request, response) => {


  if(request.session) {
    let cookieId = request.session.cookieId;
    User.findOne({cookieId}, (err, result) => {
      if(err) console.log(err);
      else if(result) {
        let adminVariables = {
          name: result.username
        }
        response.render('admin-home', adminVariables);
      }
      else {
        let ejsOptions = {
          errors: null
        }
        response.render('login', ejsOptions);
      }
      
    })
  }
  // response.sendFile(__dirname + '/admin-login.html');

});

// logout get
app.get('/admin/logout', (request,response)=>{
  if(request.session) {
    request.session.cookieId = "";
    response.redirect('/admin');
  }
});

//link to forms-home
app.get('/forms-home', (request,response)=>{
  response.render('forms-home');
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
      console.log(result._id);
      let cookieId = Date.now() + result._id;
      request.session.cookieId = cookieId;
      User.findOneAndUpdate({username: result.username}, {cookieId}, (err, output) => {
        if(err) console.log(err);
        else {
          console.log('cookieId updated successfully');
          // response.render('admin-home');
          response.redirect('/admin');
        }
        
      });
      // response.send('good credentials');
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

// initialise db connection
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
// }); // run this once to save admin to db then delete this code
