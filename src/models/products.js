const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        requerid: true,
        trim: true
    },
    slug:{
        type: String,
        requerid: [true,'O Slug é Obrigadotiro!'], 
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        requerid: true
    },
    price:{
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
        requerid: true,
        default: true
    },
    tags:[{
        type: String,
        requerid: true
    }]
});

module.exports = mongoose.model('Products', schema);