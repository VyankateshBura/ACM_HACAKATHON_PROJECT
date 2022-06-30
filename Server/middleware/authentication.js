const jwt = require("jsonwebtoken");
const studentProfile = require("../models/studentprofile")
const facultyProfile = require("../models/teacherprofile");
exports.isauthenticate = async (req, res, next) => {
    const token = req.headers.token;
    // console.log(token);
    if (!token) {
        return res.status(200).json({
            succses: false,
            message: "please login for accses "
        })
    }
    req.token = token;
    decode = jwt.verify(token, process.env.JWT_SECRETE)
    req.student = await studentProfile.findById(decode.id);
    // console.log(req.student)
    next();
}
exports.isfacultyauthenticate = async (req, res, next) => {
    const token = req.headers.token;
    // console.log(token);
    if (!token) {
        return res.status(200).json({
            succses: false,
            message: "please login for accses "
        })
    }
    req.token = token;
    decode = jwt.verify(token, process.env.JWT_SECRETE)
    req.faculty = await Faculty.findById(decode.id);
    // console.log(req.student)
    next();
}