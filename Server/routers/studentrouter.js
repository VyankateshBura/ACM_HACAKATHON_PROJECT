const express = require("express");
const { display, studentsignup, studentLogin, logout, forgotPassword } = require("../controllers/studentcontrollers/studentlogsigncontroller");
const { isauthenticate } = require("../middleware/authentication")
const { sendProfile, updateProfile } = require("../controllers/studentcontrollers/studentprofilecontroller");
// const display = require("../controllers/studentcontroller")
const router = express.Router();
router.route("/studentsignup").post(studentsignup);
router.route("/studentlogin").post(studentLogin);
router.route("/studentprofile").get(isauthenticate, sendProfile);
router.route("/logout").get(isauthenticate, logout);
router.route("/forgotPassword").get(isauthenticate, forgotPassword);
router.route("/profile/update").post(updateProfile);


module.exports = router