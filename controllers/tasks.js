const tasks = require("../models/tasks")

const getTasks = async (req, res) =>{
    try{
        const allTask = await tasks.find()
        res.status(200).json({allTask})
    }
    catch(err){
        res.status(500).json({msg: err})
    }

};

const createTask = async (req, res) => {
    try{
        const task =  await tasks.create(req.body)
        res.status(201).json(task);
        // console.log(req.body);
    }
    catch (err){
       res.status(500).json({msg: err})
    }
};

const getTask = async (req, res) =>{
    try{
        const {id} = req.params
        const getSpecificTask = await tasks.findOne({_id: id});
        if (!getSpecificTask){
            return res.status(404).json({msg: `task with id: ${req.params.id} not found.`})
        }
        res.status(200).json({getSpecificTask})
        console.log(id)
    }
    catch(err){
        res.status(500).json({msg: err})
    }
}

const updateTask =  (req, res) =>{
    res.send("updated");
};

const deleteTask = (req, res) =>{
    res.send("you deleted a task");
};

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}