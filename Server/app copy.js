
// const express = require('express');
// const app = express();
// const path = require('path');
// const crypto = require('crypto');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const {GridFsStorage} = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');
// const bodyParser = require('body-parser');
// require('dotenv').config();


// //MongoURI
// const MongoURI = process.env.MONGO_URI;

// //Create mongo Connection
// const conn =  mongoose.createConnection(MongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
// });

// //init gfs
// let gfs,gridFsBucket;

// conn.once('open',function(){
//     gfs = Grid(conn.db,mongoose.mongo);
//     gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{bucketName:"uploads"});
//     gfs.collection('uploads');
// })

// //Create Storage engine
// const storage = new GridFsStorage({
//     url:MongoURI,
//     file:(req,file)=>{
//         return new Promise((resolve,reject)=>{
//             crypto.randomBytes(16,(err,buff)=>{
//                 if(err){
//                     return reject(err);
//                 }
//                 const filename = buff.toString('hex')+path.extname(file.originalname);
//                 const fileInfo = {
//                     filename:filename,
//                     bucketName:'uploads'
//                 };
//                 resolve(fileInfo);
//             })
//         })
//     }
// })
// const upload = multer({storage});


// //@route GET
// //@desc loads form

// //@route POST/upload
// //@desc uploads file to db
// app.post('/upload',upload.single('file'),(req,res)=>{
//     try {
//         res.json({file:req.file});
//     } catch (error) {
//         console.log(error);
//     }
    
// })

// //@route get /files
// //desc Display all files in json
// app.get('/files',(req,res)=>{
//     gfs.files.find().toArray((err,files)=>{
//         //Check if files exist
//         if(!files || files.length === 0){
//             return res.status(404).json({
//                 err:"No files exist"
//             })
//         }
//         //Files exist
//         return res.json(files);

//     })
// })

// //Getting a single file
// //@route get /files/:filename
// //desc Display single file in json
// app.get('/files/:filename',(req,res)=>{
//     gfs.files.findOne({filename:req.params.filename},(err,file)=>{
//          //Check if files exist
//          if(!file || file.length === 0){
//             return res.status(404).json({
//                 err:"No file exist"
//             })
//         }

//         //File exist
//         return res.json(file);
//     })

// })


// //@route get /image/:filename
// //desc Display image
// app.get('/image/:filename',(req,res)=>{
//     gfs.files.findOne({filename:req.params.filename},(err,file)=>{
//          //Check if files exist
//          if(!file || file.length === 0){
//             return res.status(404).json({
//                 err:"No file exist"
//             })
//         }
//         //Check if image
//         if(file.contentType === 'image/jpeg'||file.contentType === 'image/png'||file.contentType === 'image/jpg'){
//             //Read Output to Browser
//             const readstream = gridFsBucket.openDownloadStreamByName(file.filename);
//             readstream.pipe(res);
//         }else{
//             res.status(404).json({err:"Not an image"});
//         }
       
//     })

// })



// //Middleware
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));




// app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('index')
// });
// const port = 5000;
// app.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// })
