const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAuditor: {
        type: Boolean,
        required: true,
        default: false
    }, 
}, {
        timestamps: true
});

module.exports = model('user', userSchema)