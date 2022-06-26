const express = require("express");
const { sendSubject } = require("../controllers/examination/examinationcontrollers");
const Router = express.Router();
const { facultyLogin, facultysignup, logout, updateFacultyPrfile, sendProfile } = require("../controllers/facultycontrollers/facultyProfile");
const { isfacultyauthenticate, isauthenticate } = require("../middleware/authentication");
const { addStudent } = require("../controllers/facultycontrollers/facultydashboardfeature")
Router.route("/signup").post(facultysignup);
Router.route("/login").post(facultyLogin)
Router.route("/logout").get(isfacultyauthenticate, logout);
Router.route("/profile/update").put(isfacultyauthenticate, updateFacultyPrfile)
Router.route("/dashboard/:subject/").put(isfacultyauthenticate, addStudent)
Router.route("/profile").get(isfacultyauthenticate, sendProfile)
// Router.route("/setexam").get(isauthenticate,sendSubject)


module.exports = Router;