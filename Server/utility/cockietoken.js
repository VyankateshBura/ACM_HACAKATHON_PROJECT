const dotenv = require('dotenv')
dotenv.config({path:'config/config.env'});

exports.sendtoken = async (res, statuscode, student) => {
    token = student.getJWTToken();
    
    res.status(statuscode).json({
        succses: true,
        student,
        token
    })
}
exports.sendtokenfaculty = async (res, statuscode, faculty) => {
    token = faculty.getJWTToken();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.status(statuscode).cookie("token", token).json({
        succses: true,
        faculty,
        token
    })
}
