const mongoose = require("mongoose");

const studentEnrollCourschema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: "facultyProfile",
        required: true
    },
    enrollStudentPrn: [{
        type: String
    }]

})
module.exports = mongoose.model("Enroll students", studentEnrollCourschema)