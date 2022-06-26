const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please enter subject"],
    },
    name: {
        type: String,
        required: [true, "Please enter name "]
    },
    question: [
        {
            questionTitle: {
                type: String
            },
            typeOfQuestion: {
                type:String
            },
            option1: {
                type: String
            },
            option2: {
                type: String
            },
            option3: {
                type: String
            },
            option4: {
                type: String
            },
            marks: {
                type: Number,
                required: [, "Ente the marks of student "]
            }

        }

    ]
    ,
    image: [
        {
            public_key: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    marks: {
        type: Number,
        required: [true, "Please add marks "]
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: "facultyProfile",
        required: true
    }
})

module.exports = mongoose.model("ExamPaper", questionPaperSchema);