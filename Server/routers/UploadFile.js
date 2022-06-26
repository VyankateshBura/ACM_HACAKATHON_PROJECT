const express = require('express');
const Router = express.Router();
const {getAllFiles}  = require("../controllers/FileUploading/UploadFile")


Router.route("/getallfiles").get(getAllFiles);
// Router.route('/UploadFiles').post( upload.array('imgCollection', 6),UploadFiles);

module.exports = Router;