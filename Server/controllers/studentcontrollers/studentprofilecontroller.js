const cloudinary = require("cloudinary")
const express = require("express");
const dotenv = require('dotenv')
const studentProfile = require('../../models/studentprofile')
dotenv.config({path:'config/config.env'});
const jwt = require("jsonwebtoken");
const catchAsyncError = require("../../middleware/catchAsyncError")
const ErrorHandler = require("../../utility/errorHandler")


exports.sendProfile = async (req, res, next) => {
    const data = jwt.verify(req.headers.token,process.env.JWT_SECRETE);
    console.log("Request arrived");
    const student = await studentProfile.findById(data.id);
    if (!student) {
        return next(new ErrorHandler("Student not recognize", 404))
    }
    // console.log(decode.id);
    res.status(201).json({
        success: true,
        student
    })
}

exports.updateProfile = catchAsyncError(async(req,res)=>{
    try {
        const token = req.headers.token;
        const data = jwt.verify(token,process.env.JWT_SECRETE);
        const student = await studentProfile.findById(data.id);
        if (!student) {
            res.status(201).json({
                success: false,
                message: "Student not recognize"
            })
        }
        console.log("update request arrived");
        console.log(req.body);
        // student.name = req.body.name || student.name;
        // student.email = req.body.email || student.email;
        // student.photo = req.body.photo || student.photo;
        // student.signature = req.body.signature || student.signature;
        // student.prn = req.body.prn || student.prn;
        // student.phoneNumber = req.body.phoneNumber || student.phoneNumber;
        // student.branch = req.body.branch || student.branch;
        // student.year = req.body.year || student.year;
        // student.dateofbirth = req.body.dateofbirth || student.dateofbirth;
        count=1;
        await student.save();
        res.status(200).json({
            succses: true.valueOf,
            student,
            file:req.files,
            message: "profile updates sussesfully "
        })
    } catch (error) {
        console.log(error);
    }
})
