const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection: {
        type: Array
    }
}, {
    collection: 'users'
})
module.exports = mongoose.model('File', FileSchema)