const { sendtoken } = require("../../utility/cockietoken");
const { sendEmail } = require("../../utility/passwordResetEmail")
const Student = require("../../models/studentprofile");
const catchAsyncError = require("../../middleware/catchAsyncError");
const ErrorHandler = require("../../utility/errorHandler");
exports.studentsignup = catchAsyncError(async (req, res) => {
    const { name, email, password, prn, phoneNumber } = req.body;
    const branch = '';
    const year = '';
    const dateofbirth = '';
    const profile = '';
    const student = await Student.create({
        name, email, password,
        prn,
        phoneNumber,
        branch,year,dateofbirth,profile
    })
    sendtoken(res, 201, student);

})
exports.studentLogin = catchAsyncError(async (req, res, next) => {
    console.log(req.body);
    try{
         // getting  details from request
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            succses: false,
            msg: "not student"
        })
    }
    // find user with email
    const student = await Student.findOne({ email }).select("+password");
    if (!student) {
        return res.status(400).json({
            succses: false,
            msg: "not student"
        })
    }
    //check password is matchend or not 
    const isPasswordMatched = await student.comparePassword(password);
    // console.log(password, student.password);
    if (!isPasswordMatched) {
        return res.status(400).json({
            succses: false,
            msg: "not student"
        })
    }
    sendtoken(res, 201, student)
    }catch(err){
        console.log(err);
    }
   

})
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, new Date(Date.now));
    res.clearCookie("token")
    await req.student.save();

    res.status(200).json({
        succses: true,
        message: "Logout succsesfully"
    })
})

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    // console.log(req);
    const student = await Student.findOne({ email: req.body.email });
    if (!student) {
        return res.status(401).json({
            succses: false,
            message: "Student not found"
        })
    }

    const resetToken = student.getResetpasswordToken();
    await student.save();
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
    const message = `Your reset Password Link  is:- \n${resetPasswordUrl}\n\n.If you not send the please ignore`;
    try {
        console.log(req.body.email);
        await sendEmail({
            email: student.email,
            subject: "WCOE online service password reset link",
            message
        })
        res.status(200).json({
            succses: true, 
            message
        })
    }
    catch (error) {
        student.resetPasswordToken = undefined;
        student.resetPasswordExpire = undefined;
        student.save();
        return res.status(401).json({
            succses: false,
            message: error
        })
    }

})