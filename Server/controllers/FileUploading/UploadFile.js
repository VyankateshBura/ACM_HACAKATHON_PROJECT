// User model
const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const MongoURI = process.env.MONGOHOST;

// Create mongo Connection
const conn =  mongoose.createConnection(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

// init gfs
let gfs,gridFsBucket;
conn.once('open',function(){
    gfs = Grid(conn.db,mongoose.mongo);
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{bucketName:"uploads"});
    gfs.collection('uploads');
})

const getFile =    async (req,res)=>{
    try{
        console.log(req.params.filename);
        gfs.files.findOne({filename:req.params.filename}, async(err,file)=>{
             //Check if files exist
             if(!file || file.length === 0){
                return res.status(404).json({
                    err:"No file exist"
                })
            }
    
            //File exist
            const readstream = await gridFsBucket.openDownloadStreamByName(file.filename);
            readstream.pipe(res);
            // return res.json(file);
        })
    }catch(err){
        console.log(err);
    }
       
    
    }

module.exports= {
    getFile
}
