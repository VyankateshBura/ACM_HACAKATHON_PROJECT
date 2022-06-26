const mongoose = require("mongoose"); 

const liveExamSchema = new mongoose.Schema({
    examName: {
        type: String, 
        req: true
    },
    questionPaper:{
        type: mongoose.Schema.ObjectId,
        ref: ExamPaper,
        required:true
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: "facultyProfile",
        required: true
    },
    subject: {
        type: String,  
    }
})
module.exports = mongoose.model("LiveExam", liveExamSchema)