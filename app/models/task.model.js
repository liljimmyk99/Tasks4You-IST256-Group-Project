const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: String,
    dueDate: Date,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);