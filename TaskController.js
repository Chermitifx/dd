const Task = require('../models/TaskModel');

// Create and Save a new Task
exports.AddTask = async (req, res) => {
    if (!req.body.Title || !req.body.Description) {
        return res.status(400).send({ message: "Title and Description are required!" });
    }

    const newTask = new Task({
        Title: req.body.Title,
        Description: req.body.Description,
        Status: req.body.Status || "Pending",
    });

    try {
        const savedTask = await newTask.save();
        res.status(201).send({
            message: "Task added successfully!",
            task: savedTask,
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "An error occurred while creating the task."
        });
    }
};

// Assign Task to a User
exports.AssignTask = async (req, res) => {
    const { id } = req.params;
    const { AssignedUser } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { AssignedUser }, { new: true });
        if (!task) {
            return res.status(404).send({ message: "Task not found." });
        }
        res.status(200).send({
            message: "Task assigned successfully.",
            task
        });
    } catch (error) {
        res.status(500).send({
            message: "An error occurred while assigning the task."
        });
    }
};

// Get All Tasks (Admin) or User's Assigned Tasks
exports.GetTasks = async (req, res) => {
    const { role, name } = req.query;

    try {
        let tasks;
        if (role === "admin") {
            tasks = await Task.find(); // Admin sees all tasks
        } else {
            tasks = await Task.find({ AssignedUser: name }); // Regular user sees only assigned tasks
        }

        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send({
            message: "An error occurred while retrieving tasks."
        });
    }
};

//---------------------------------- Update Status : 

exports.UpdateStatus = async(req,res)=>{
    try {
        const {id}=req.params
        
        
    const {Status} = req.body
   
    
    var response=  await Task.findByIdAndUpdate(id,{
        Status:Status
    })
    
      
    res.status(204).json(response)
    } catch (error) {
        res.status(404).json('not found')  
    }
    }

