const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('landing');
});
router.get('/page1', (req, res) => {
  res.render('page1');
});
router.get('/test', (req, res) => {
  res.render('test');
});

//unfinished code (formgenerator)
const createStudent = require(process.cwd() + '/modules/user-model/Student.js').createStudent;
const createForm = require(process.cwd() + '/modules/user-model/Form.js').createForm;

router.post('/test', (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let gender = req.body.gender;
  let course = req.body.course;
  let contact = req.body.contact;
  let nationality = req.body.nationality;
  let email = req.body.email;
  let student = createStudent(name, gender, course, contact, nationality, email);
  let questions = req.body.q1.id + req.body.q2.id + req.body.q3.id;
  let answers = req.body.q1 + req.body.q2 + req.body.q3;
  let form = createForm(student,questions,answers);
  
  student.save((err, data) => {
    if(err) {
      res.send(err);
    } else {
      form.save((err,date)=>{
        if(data){
          res.send("success");
        }
      });
    }
  });

  
});

router.post('/finish', (req, res) => {
  console.log(req.body);
});

module.exports = router;
