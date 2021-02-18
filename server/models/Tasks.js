const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdBy:{
        type: String,
        //type: Schema.Types.ObjectId,
        required: true,
        //ref: 'user'
    },
    taskType: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        //type: Schema.Types.ObjectId,
        required: true,
        //ref: 'user'
    },
    comments: [
        {
            body: {
                type: String,
            },
            commentBy: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            createdAt: {
                type: Date
            },
        }
    ],
    auditId: {
        type: String,
        //type: Schema.Types.ObjectId,
        required: true,
        //ref: 'portfolio'
    },
    isComplete: {
        type: Boolean,
        required: true,
        defaultFalse: false
    },
    selectedDoc: {
        type: String,
        required: false,
    }
}, 
    {
        timestamps: true
});

module.exports = model('task', taskSchema); 