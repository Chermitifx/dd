const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

// Route to add a new task
router.post('/add', TaskController.AddTask);

// Route to assign a task to a user
router.patch('/assign/:id', TaskController.AssignTask);
router.patch('/assign/:id', TaskController.AssignTask);
// Route to get tasks (Admin sees all tasks, regular users see only their tasks)
router.get('/get', TaskController.GetTasks);

module.exports = router;
