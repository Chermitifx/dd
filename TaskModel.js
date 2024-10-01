const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        enum: ["Pending", "In progress", "Completed"],
        default: "Pending"
    },
    AssignedUser: {
        type: String,
        default: "not assigned"
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
