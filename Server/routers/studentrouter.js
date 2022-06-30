const express = require("express");
const path = require('path');
const crypto = require('crypto'); 
const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const dotenv = require('dotenv')
dotenv.config({path:'config/config.env'});
const { display, studentsignup, studentLogin, logout, forgotPassword } = require("../controllers/studentcontrollers/studentlogsigncontroller");
const { isauthenticate } = require("../middleware/authentication")
const { sendProfile, updateProfile } = require("../controllers/studentcontrollers/studentprofilecontroller");
// const display = require("../controllers/studentcontroller")

//File Uploading code

const MongoURI = process.env.MONGOHOST;

//Create mongo Connection
const conn =  mongoose.createConnection(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

//init gfs
let gfs,gridFsBucket;
conn.once('open',function(){
    gfs = Grid(conn.db,mongoose.mongo);
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{bucketName:"uploads"});
    gfs.collection('uploads');
})
let count=1;
//Create Storage engine
const storage = new GridFsStorage({
    url:MongoURI,
    file:(req,file)=>{
        return new Promise((resolve,reject)=>{
            crypto.randomBytes(16,(err,buff)=>{
                if(err){
                    return reject(err);
                }
                const token = req.headers.token;
                const data = jwt.verify(token,process.env.JWT_SECRETE);
                // console.log(data);
                console.log("Inside the upload");
                buff.toString('hex')

                const filename = `${file.fieldname}`+data.id+`${count}`+path.extname(file.originalname);
                count++;
                const fileInfo = {
                    User_id:data.id,
                    filename:filename,
                    bucketName:'uploads'
                };
                resolve(fileInfo);
            })
        })
    }
})
const upload = multer({storage});


const router = express.Router();
router.route("/studentsignup").post(studentsignup);
router.route("/studentlogin").post(studentLogin);
router.route("/studentprofile").get(isauthenticate, sendProfile);
router.route("/logout").get(isauthenticate, logout);
router.route("/forgotPassword").get(isauthenticate, forgotPassword);
// router.route("/profile/update",upload.array('profiles')).post(updateProfile);


module.exports = router