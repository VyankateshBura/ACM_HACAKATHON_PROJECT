const dotenv = require('dotenv')
dotenv.config({path:'config/config.env'});

exports.sendtoken = async (res, statuscode, student) => {
    token = student.getJWTToken();
    
    res.status(statuscode).cookie("token", token,{
        expires: new Date(2022, 11, 24, 10, 33, 30, 0),
        secure: false, // set to true if your using https
        httpOnly: true,
      }).json({
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
