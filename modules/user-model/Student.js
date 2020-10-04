const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

const createStudent = (name, gender, course, contact, nationality, email) => {
  return new Student({name, gender, course, contact, nationality, email});
};

module.exports.studentSchema = studentSchema;
module.exports.Student = Student;
module.exports.createStudent = createStudent;
