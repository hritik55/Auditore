const { model, Schema } = require('mongoose');

const portfolioSchema = new Schema({
    auditName: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }, 
    createdBy: {
        type: String,
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users' 
    },
    releaseDate: {
        type: Date,
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'tasks'
    }]
}, {
    timestamps: true
});

module.exports = model('portfolio', portfolioSchema)