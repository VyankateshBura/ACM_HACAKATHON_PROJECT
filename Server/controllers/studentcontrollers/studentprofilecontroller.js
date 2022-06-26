const cloudinary = require("cloudinary")

Student = require("../../models/studentprofile");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("../../middleware/catchAsyncError")
const ErrorHandler = require("../../utility/errorHandler")
exports.sendProfile = async (req, res, next) => {
    const student = await Student.findById(req.student._id);
    if (!student) {
        return next(new ErrorHandler("Student not recognize", 404))
    }
    // console.log(decode.id);
    res.status(201).json({
        sucsse: true,
        student
    })
}

exports.updateProfile = catchAsyncError(async (req, res, next) => {

    // const student = await Student.findById(req.student._id)

    // if (!student) {
    //     res.status(201).json({
    //         sucsse: false,
    //         message: "Student not recognize"
    //     })
    // }
    // if (req.body.photo != "") {
    // console.log(req.body.photo)
    // console.log("Logged out ");
    // if (!student.photo) {
    // console.log(req.body.data);
    // const uploadResponse = await cloudinary.uploader.upload(req.body.data, {
    //     folder: "profilePic",
    //     width: 150,
    //     crop: "scale",
    // });
    // console.log(uploadResponse);

    //     student.photo = {
    //         public_id: myCloud.public_id,
    //         url: myCloud.secure_url,
    //     }
    // }
    // else {
    //     const imageId = student.photo.public_id;
    //     await cloudinary.v2.uploader.destroy(imageId);
    //     const myCloud = await cloudinary.v2.uploader.upload(req.body.photo, {
    //         folder: "profilePic",
    //         width: 150,
    //         crop: "scale",
    //     });

    //     student.photo = {
    //         public_id: myCloud.public_id,
    //         url: myCloud.secure_url,
    //     }
    // }

    // }
    // 
    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    // student.photo = req.body.photo || student.photo;
    student.signature = req.body.signature || student.signature;
    student.prn = req.body.prn || student.prn;
    student.phonenumber = req.body.phonenumber || student.phonenumber;
    student.branch = req.body.branch || student.branch;
    student.year = req.body.year || student.year;
    student.dateofbirth = req.body.dateofbirth || student.dateofbirth;
    await student.save();
    res.status(200).json({
        succses: true.valueOf,
        student,
        message: "profile updates sussesfully "
    })
})
