const express = require('express');
const Router = express.Router();
const multer = require('multer');
const {getFile}  = require("../controllers/FileUploading/UploadFile")


Router.route("/files/:filename").get(getFile);
// Router.route('/UploadFiles').post( upload.array('imgCollection', 6),UploadFiles);

module.exports = Router;