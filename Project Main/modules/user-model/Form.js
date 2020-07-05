const mongoose = require('mongoose');
const studentSchema = require(process.cwd() + '/modules/user-model/Student.js').studentSchema;

const formSchema = mongoose.Schema({
  student: {
    type: studentSchema,
    required: true
  },
  questions: {
    type: String,
    required: true
  },
  answers: {
    type: String,
    required: true
  },
  dateAnswered: {
    type: Date,
    default: Date.now
  }
});

const Form = mongoose.model('Form', formSchema);

const createForm = (student,questions, answers,dateAnswered) => {
  return new Form({student, questions, answers, dateAnswered});
};

module.exports.Form = Form;
module.exports.createForm = createForm;
module.exports.formSchema = formSchema;
