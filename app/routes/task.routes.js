module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    // Create a new Task
    app.post('/', tasks.create);

    // Retrieve all Tasks
    app.get('/', tasks.findAll);

    // Retrieve a single task with taskId
    app.get('/:taskId', tasks.findOne);

    // Update a Task with taskId
    app.put('/:taskId', tasks.update);

    // Delete a Task with taskId
    app.delete('/:taskId', tasks.delete);
}