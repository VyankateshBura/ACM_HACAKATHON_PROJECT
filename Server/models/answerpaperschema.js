const mongoose = require("mongoose");
const answerPaperSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    }
    ,
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: "facultyProfile",
        required: true
    },
    questionPaper: {
        type: mongoose.Schema.ObjectId,
        ref: "ExamPaper",
        required: true
    }
    ,
    studentPRN: {
        type: String,
        requires: true
    },
    QA: [
        {
            question: {
                type: String
            },
            answer: {
                type: String
            }

        }
    ]

})
exports.module = mongoose.model("Answer Paper", answerPaperSchema)