const { sendtoken, sendtokenfaculty } = require("../../utility/cockietoken");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../../utility/passwordResetEmail")
const facultyProfile = require("../../models/teacherprofile");
courseStudent = require("../../models/enrollstudent");
const catchAsyncError = require("../../middleware/catchAsyncError")
const ErrorHandler = require("../../utility/errorHandler")
exports.facultysignup = catchAsyncError(async (req, res) => {
    const { name, email, password, phoneNumber, coursestought } = req.body;
    const department = "";
    const dateofbirth = "";
    const faculty = await facultyProfile.create({
        name, email, password,phoneNumber,department,dateofbirth
    })
    sendtokenfaculty(res, 201, faculty)

})

exports.facultyLogin = catchAsyncError(async (req, res, next) => {
    // getting  details from request
    console.log("Faculty Login");
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    // find user with email
    const faculty = await facultyProfile.findOne({ email }).select("+password");
    if (!faculty) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    //check password is matchend or not 
    const isPasswordMatched = await faculty.comparePassword(password);
    // console.log(password, student.password);
    if (!isPasswordMatched) {
        return res.status(400).json({
            succses: false,
            msg: "not faculty"
        })
    }
    sendtokenfaculty(res, 201, faculty)

})
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, new Date(Date.now));
    res.clearCookie("token")
    await req.faculty.save();

    res.status(200).json({
        succses: true,
        message: "Logout succsesfully"
    })
}
)
// exports.forgotPassword = async (req, res, next) => {
//     // console.log(req);
//     const student = await Student.findOne({ email: req.body.email });
//     if (!student) {
//         return res.status(401).json({
//             succses: false,
//             message: "Student not found"
//         })
//     }

//     const resetToken = student.getResetpasswordToken();
//     await student.save();
//     const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
//     const message = `Your reset Password Link  is:- \n${resetPasswordUrl}\n\n.If you not send the please ignore`;
//     try {
//         console.log(req.body.email);
//         await sendEmail({
//             email: student.email,
//             subject: "WCOE online service password reset link",
//             message
//         })
//         res.status(200).json({
//             succses: true,
//             message
//         })
//     }
//     catch (error) {
//         student.resetPasswordToken = undefined;
//         student.resetPasswordExpire = undefined;
//         student.save();
//         return res.status(401).json({
//             succses: false,
//             message: error
//         })
//     }

// }

//create profile faculty 
exports.sendProfile = catchAsyncError(async (req, res, next) => {
    const data = jwt.verify(req.headers.token,process.env.JWT_SECRETE);
    const faculty = await facultyProfile.findById(data.id);
    if (!faculty) {
        return next(new ErrorHandler("Faculty not recognize", 404))

    }
    // console.log(decode.id);
    res.status(201).json({
        success: true,
        faculty
    })
})

// update profile for faculty 
exports.updateFacultyProfile = catchAsyncError(async (req, res, next) => {

    const { newcoursestought } = req.body;
    const doc = await Faculty.updateOne(
        { _id: req.faculty._id },
        ({ $addToSet: { coursestought: { $each: newcoursestought } } })
    )
    const faculty = await Faculty.findById(req.faculty._id)

    if (!faculty) {
        return next(new ErrorHandler("Faculty not recognize", 404))
    }

    faculty.coursestought.forEach(async course => {
        const facultyClass = await courseStudent.findOne({ teacher: req.faculty._id, subject: course });
        if (!facultyClass) {
            courseStudent.create(
                {
                    subject: course,
                    teacher: req.faculty._id
                }
            )
        }
    })

    faculty.name = req.body.name || faculty.name;
    faculty.email = req.body.email || faculty.email;
    faculty.photo = req.body.photo || faculty.photo;
    faculty.signature = req.body.signature || faculty.signature;

    faculty.phonenumber = req.body.phonenumber || faculty.phonenumber;
    faculty.branch = req.body.branch || faculty.branch;

    faculty.dateofbirth = req.body.dateofbirth || faculty.dateofbirth;
    await faculty.save();

    res.status(200).json({
        succses: true,
        coursestought: faculty.coursestought,
        message: "profile updates sussesfully ", 
    })
}
)