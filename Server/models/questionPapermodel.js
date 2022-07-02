const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please enter subject"],
    },
    name: {
        type: String,
    },
    Faculty_id: {
        type: String,
    },
    Faculty: {
        type: String,
        required: [true, "Please enter name "]
    },
    question: [
        {   
            type:Array,
            "default":[]
            // questionNo:{
            //     type:Number,
            //     required:[true,"Please enter question number"]
            // },
            // questionTitle: {
            //     type: String
            // },
            // typeOfQuestion: {
            //     type:String
            // },
            // option1: {
            //     type: String
            // },
            // option2: {
            //     type: String
            // },
            // option3: {
            //     type: String
            // },
            // option4: {
            //     type: String
            // },
            // marks: {
            //     type: Number,
            //     required: [true, "Enter the marks of student "]
            // }

        }

    ]
    ,
    marks: {
        type: Number,
        required: [true, "Please add marks "]
    }
})

module.exports = mongoose.model("ExamPaper", questionPaperSchema);