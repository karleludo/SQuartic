const express = require('express');
const app = express();


app.listen(3000, (err)=> {
    if (err) console.log(err);
    else console.log('running successfully at port ' + 3000);
    
});


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html');
}) 

