const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // response.render('index');  changed to landing.ejs from matt
  res.render('landing');
});

router.get('/page1', (req, res) => {
  res.render('page1');
});

router.get('/page2', (req, res) => {
  res.render('page2');
});

router.get('/page3', (req, res) => {
  res.render('page3');
});

router.get('/page4', (req, res) => {
  res.render('page4');
});

router.get('/finish', (req, res) => {
  res.render('finish');
});

router.get('/test', (req, res) => {
  res.render('test');
});

const createStudent = require(process.cwd() + '/modules/user-model/Student.js').createStudent;

router.post('/test', (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let gender = req.body.gender;
  let course = req.body.course;
  let contact = req.body.contact;
  let nationality = req.body.nationality;
  let email = req.body.email;
  let student = createStudent(name, gender, course, contact, nationality, email);
  student.save((err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.post('/finish', (req, res) => {
  console.log(req.body);
});

module.exports = router;
