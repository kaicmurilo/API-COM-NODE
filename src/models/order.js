const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    number: {
        type: String,
        requerid: true
    },
    creatDate: {
        type: Date,
        requerid: true,
        default: Date.now
    },
    status: {
        type: String,
        requerid: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            requerid: true,
            default: 1
        },
        price: {
            type: Number,
            requerid: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
    }]
});

module.exports = mongoose.model('Order', schema);