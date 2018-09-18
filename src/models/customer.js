const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type: String,
        requerid: true
    },
    email:{
        type: String,
        requerid: true
    },
    password:{
        type: String,
        requerid: true
    }
});

module.exports = mongoose.model('Customer', schema);