
Faculty = require("../../models/teacherprofile");
ExamPaper = require("../../models/questionPapermodel")
LiveExam = require("../../models/liveexamModel")
const catchAsyncError = require("../../middleware/catchAsyncError")
const ErrorHandler = require("../../utility/errorHandler")
const jwt = require("jsonwebtoken");
exports.sendSubject = catchAsyncError(async (req, res, next) => {
    const faculty = await Faculty.findById(req.faculty._id);
    // console.log(faculty);

    if (!faculty) {
        return res.status(404).json({
            succses: false,
            message: "faculty not found "

        })
        // return next(new ErrorHandler( "faculty not found",404));
    }

    ({ coursestought } = faculty);
    res.status(201).json({
        succses: true,
        message: "subjects",
        coursestought
    })
});

exports.sendPaper = catchAsyncError(async (req, res, next) => {
    const questionPaper = await ExamPaper.find({ teacher: req.faculty._id, _id: req.params.id });

    if (!questionPaper) {
        return res.status(401).json({
            succses: false,
            message: "You have not paper for this perticular subject"
        })
    }
    res.status(201).json({
        succses: true,
        questionPaper
    })
}
)
exports.savePaper = catchAsyncError(async (req, res, next) => {
    console.log("Question paper arrived...");
    const { name, marks, subject } = req.body;
    if (!name || !marks) {
        return res.status(401).json({
            succses: false,
            message: "question paper name or marks cannot be empty"
        })

    }
    const paperAdded = await ExamPaper.create({
        name, marks, subject,
        teacher: req.faculty._id
    })
    res.status(200).json({
        succses: true,
        message: "question paper added ",
        paperAdded
    })
})

exports.addQuestion = catchAsyncError(async (req, res, next) => {
    const { questionTitle, typeOfQuestion, marks, option1, option2, option3, option4 } = req.body;
    const subject = req.params.subject;
    const paperid = req.params.id;
    const questionPaper = await ExamPaper.findOne({ _id: paperid, teacher: req.faculty._id })
    if (typeOfQuestion == "MCQ" && (option1 == undefined || option2 == undefined || option3 == undefined || option4 == option1 == undefined)) {
        res.status(401).json({
            succses: false,
            message: "Option field Cannot be empty"
        })
    }
    if (typeOfQuestion == "Theory") {
        const questionsended = {
            questionTitle, typeOfQuestion, marks
        }
        questionPaper.question.push(questionsended);
        questionPaper.save();
    }
    if (typeOfQuestion == "MCQ") {
        const questionsended = {
            questionTitle, typeOfQuestion, marks, option1, option2, option3, option4
        }
        questionPaper.question.push(questionsended);
        questionPaper.save();
    }
    res.status(201).json({
        sucsses: true,
        questionPaper
    })
})
exports.deleteQuestion = catchAsyncError(async (req, res, next) => {
    const questionPaper = await ExamPaper.findOne({ teacher: req.faculty._id, _id: req.params.paperid });
    if (!questionPaper) {
        res.status(401).json({
            succses: false,
            message: "question paper not found"
        })
    }
    question = questionPaper.question.filter(
        que => que._id != req.params.questionid
    )
    await ExamPaper.updateOne({ teacher: req.faculty._id, _id: req.params.paperid }, { question }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(201).json({
        succses: true,
        question
    })
})

exports.updateQuestion = catchAsyncError(async (req, res, next) => {

    const { questionTitle, marks, typeOfQuestion, option1, option2, option3, option4 } = req.body
    const questionPaper = await ExamPaper.findOne({ teacher: req.faculty._id, _id: req.params.paperid });
    if (!questionPaper) {
        res.status(401).json({
            succses: false,
            message: "question paper not found"
        })
    }
    let questionnotfound = true
    questionPaper.question.forEach(que => {
        if (que._id == req.params.questionid) (que.question = questionTitle, que.marks = marks, que.option1 = option1, que.option2 = option2, que.option3 = option3, que.option4 = option4, que.typeOfQuestion = typeOfQuestion, questionnotfound = false)
    });
    if (questionnotfound) {
        return res.status(401).json({
            succses: false,
            message: "question not found"
        })
    }
    await questionPaper.save();
    res.status(201).json({
        succses: true,
        questionPaper
    })
})
exports.sendAllQuestionPapers = catchAsyncError(async (req, res, next) => {
    const questionPapers = await ExamPaper.find({ subject: req.params.subject, teacher: req.faculty._id })
    if (questionPapers.length == 0) {
        return res.status(201).json({
            succses: false,
            message: "faculty don't have question paper "
        })
    }

    res.status(201).json({
        succses: true,
        questionPapers
    })
})
exports.deleteEntireQuestionpaper = catchAsyncError(async (req, res, next) => {
    ExamPaper.remove({ _id: req.params.paperid, teacher: req.faculty._id })
    const questionPapers = await ExamPaper.find({ subject: req.params.subject, teacher: req.faculty._id })
    res.status(201).json({
        succses: true,
        questionPapers
    })
})

exports.createLiveExam = catchAsyncError(async (req, res, next) => {
    const { name, subject } = req.body;
    const questionPaper = await ExamPaper.findOne({ name });
    if (!questionPaper) {
        return next(new ErrorHandler("Question paper not found", 404))
    }
    
    await LiveExam.create({
        examName: name,
        subject,
        teacher: req.faculty._id,
        questionPaper: questionPaper._id

    })
    res.status(201).json({
        succses: true,
        message: "Exam are live now "
    })
})

exports.sendLiveExam = catchAsyncError(async (req, res, next) => {
    const { subject } = req.body; 
    if (!subject)
    {
        return next(new ErrorHandler("Please enter subject ", 404)); 
        }
    const liveExam = await LiveExam.find({ subject });   
    if (liveExam.length == 0)
    {
        return next(new ErrorHandler("No exam is live ", 404)); 
    }
    res.status(201).json({
        succses: true,
        liveExam
    })
})