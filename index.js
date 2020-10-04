const express = require("express"); 
const bodyParser = require("body-parser"); 
const ejs = require("ejs");
const cookieSession = require("cookie-session");
const app = express();

app.set("view engine", "ejs");

dbInit = require(__dirname + "/modules/db-connection/MongoDB.js").dbInit;

// initialise db connection
dbInit();

//cookieSession
app.use(
  cookieSession({
    name: "session",
    secret: "secret",
  })
);

// bodyparser encode utf-8
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// images, css, and client side javascript files are located here
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT ? process.env.PORT : 3000;

// listen to port
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("running successfully at port " + port);
});

// rerouted routes to different files for easier coding
// each route has its own file
// eg. admin.js would have admin specific routes such as /admin and /admin/logout

//  new index route
app.use("/", require(process.cwd() + "/routes/index.js"));

// new admin route
app.use("/admin", require(process.cwd() + "/routes/admin.js"));

// create admin account test
const createUser = require(__dirname + "/modules/user-model/Admin.js")
  .createUser;

let admin = createUser("testAdminName", "testPassword"); // test account

// upload admin credentials to db
// TODO: bcrypt password

// run 'mongod' before running 'node index.js'
// uncomment and run once to save admin credentials to db

admin.save((err) => {
  if (err) console.log(err);
  else console.log(admin.username + " saved successfully");
}); // run this once to save admin to db then delete this code
