const express = require("express");
const jwt = require("jsonwebtoken");
const Student = require("./models/studentprofile");;
const {v4:uuidv4} = require('uuid')
const fileupload = require('express-fileupload')
// const File = require("./models/Files")
const cookieParser = require("cookie-parser")
const path = require('path');
const crypto = require('crypto'); 
const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const dotenv = require('dotenv')
dotenv.config({path:'config/config.env'});
const app = express();
app.use(express.json());
app.use(cookieParser());
const student = require("./routers/studentrouter");
const faculty = require("./routers/facultyRouter");
const Files = require("./routers/UploadFile");
const examination = require("./routers/examinationrouter");
const cors=require("cors");

//For cors and Access control allow origin problem
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.urlencoded({extended:true}))
//MongoURI

const MongoURI = process.env.MONGOHOST;

//Create mongo Connection
const conn =  mongoose.createConnection(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

//init gfs
let gfs,gridFsBucket;
let typeoffile = null;
let token_id = null;
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


//@route GET
//@desc loads form

//@route POST/upload
//@desc uploads file to db

//Upload profile picture
app.post('/api/v1/upload/profile',upload.array('profiles'),async(req,res)=>{
    try {
        const token = req.headers.token;
        const data = jwt.verify(token,process.env.JWT_SECRETE);
        const student = await Student.findById(data.id);
        if (!student) {
            res.status(201).json({
                success: false,
                message: "Student not recognize"
            })
        }
        student.name = req.body.name || student.name;
        student.email = req.body.email || student.email;
        student.photo = req.body.photo || student.photo;
        student.signature = req.body.signature || student.signature;
        student.prn = req.body.prn || student.prn;
        student.phonenumber = req.body.phonenumber || student.phonenumber;
        student.branch = req.body.branch || student.branch;
        student.year = req.body.year || student.year;
        student.dateofbirth = req.body.dateofbirth || student.dateofbirth;
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

//Upload sign of the profile
// app.post('/api/v1/upload/sign',upload.array('profiles'),(req,res)=>{
//     try {
//         typeoffile = "sign";
//         console.log(req.body);
//         res.json({file:req.files});
//     } catch (error) {
//         console.log(error);
//     }
    
// })

//Upload the notes files
app.post('/api/v1/upload/notes',upload.array('files'),(req,res)=>{
    try {
        typeoffile = "notes";
        console.log(req.body);
        res.json({file:req.files});
    } catch (error) {
        console.log(error);
    }
    
})



//@route get /files
//desc Display all files in json
app.get('/api/v1/files',(req,res)=>{
    gfs.files.find().toArray((err,files)=>{
        //Check if files exist
        if(!files || files.length === 0){
            return res.status(404).json({
                err:"No files exist"
            })
        }
        //Files exist
        return res.json(files);

    })
})

//Getting a single file
//@route get /files/:filename
//desc Display single file in json
app.get('/api/v1/files/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},(err,file)=>{
         //Check if files exist
         if(!file || file.length === 0){
            return res.status(404).json({
                err:"No file exist"
            })
        }

        //File exist
        const readstream = gridFsBucket.openDownloadStreamByName(file.filename);
        readstream.pipe(res);
        // return res.json(file);
    })

})


//@route get /image/:filename
//desc Display image
app.get('/image/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},(err,file)=>{
         //Check if files exist
         if(!file || file.length === 0){
            return res.status(404).json({
                err:"No file exist"
            })
        }
        //Check if image
        if(file.contentType === 'image/jpeg'||file.contentType === 'image/png'||file.contentType === 'image/jpg'){
            //Read Output to Browser
            const readstream = gridFsBucket.openDownloadStreamByName(file.filename);
            readstream.pipe(res);
        }else{
            res.status(404).json({err:"Not an image"});
        }
       
    })

})



// const DIR = './public/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR); 
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
// app.post('/UploadFiles', upload.array('imgCollection', 6), (req, res, next) => {
//     console.log("Files arrived....");
//     const reqFiles = [];
//     const url = req.protocol + '://' + req.get('host')
//     for (var i = 0; i < req.files.length; i++) {
//         reqFiles.push(url + '/public/' + req.files[i].filename)
//     }
//     const user = new File({
//         _id: new mongoose.Types.ObjectId(),
//         imgCollection: reqFiles
//     });
//     user.save().then(result => {
//         res.status(201).json({
//             message: "Done upload!",
//             userCreated: {
//                 _id: result._id,
//                 imgCollection: result.imgCollection
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//         });
//     })
// })

//Rest of code
app.use(fileupload())
app.use("/api/v1", student);
app.use("/api/v1/faculty", faculty);  
app.use("/api/v1/faculty/examination", examination);
// app.use("/api/v1/files", Files);
app.use(methodOverride('_method'));






module.exports = app
