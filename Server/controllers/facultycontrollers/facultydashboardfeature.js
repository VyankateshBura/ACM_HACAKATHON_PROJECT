const catchAsyncError = require("../../middleware/catchAsyncError");
const ErrorHandler = require("../../utility/errorHandler");
 courseStudent = require("../../models/enrollstudent");
// const catchAsyncError = require("../../middleware/catchAsyncError")

exports.addStudent = catchAsyncError(async (req, res, next) => {
    const courseTaken = await courseStudent.findOne({ subject: req.params.subject, teacher: req.faculty._id })
    if (!courseTaken) {
        return next(new ErrorHandler("Faculty not assigned this course", 404))
    }
    courseTaken.enrollStudentPrn.push(req.body.PRN);
    
    res.status(201).json({
        succses: true,
        courseTaken
     })
})