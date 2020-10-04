const express = require('express');
const router = express.Router();


const User = require(process.cwd() + '/modules/user-model/Admin.js').User;

// get admin
router.get('/', (request, response) => {

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

// post login credentials
router.post('/', (request, response) => {
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

// logout get
router.get('/logout', (request,response)=>{
  if(request.session) {
    request.session.cookieId = "";
    response.redirect('/admin');
  }
});

module.exports = router;
