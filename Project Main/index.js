const express = require('express'); //import express
const bodyParser = require('body-parser'); //import bodyparser

const app = express();

app.use(bodyParser.urlencoded({  // bodyparser encode utf-8
    extended: true
}));
//listen to port
app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('running successfully at port ' + 3000);
});

// get index 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

//get admin
app.get('/admin', (request, response) => {
    response.sendFile(__dirname + '/admin-login.html');
});

//post login credentials
app.post('/login', (request, response) => {
    console.log(request.body); //console test TODO: 
});