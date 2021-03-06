const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const studentProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    profile:{
        type:String
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: true,
        validate: [validator.isEmail, "Please enter your email address"]
    },
    password: {
        type: String,
        select: false,
        required: [true, "Please enter password"]

    },
    prn: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    branch: {
        type: String,

    },
    year: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});
studentProfileSchema.pre("save", async function (next) {
    if (!this.isModified("password")) { next() }
    this.password = await bcrypt.hash(this.password, 10);
})

//for auto login after signing 
studentProfileSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRETE, { expiresIn: "100d" })
}

studentProfileSchema.methods.comparePassword = async function (enteredPassword) {
    console.log(enteredPassword + " " + this.password);
    return await bcrypt.compare(enteredPassword, this.password);
}
studentProfileSchema.methods.getResetpasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    return resetToken;
}
module.exports = mongoose.model("studentProfile", studentProfileSchema);


