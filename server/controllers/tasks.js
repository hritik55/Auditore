const Task = require('../models/Tasks')

const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}

const createTask = async (req, res) => {
    const task = req.body;

    const newTask = new Task(task);

    try{
        await newTask.save();
        res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {getTasks, createTask}