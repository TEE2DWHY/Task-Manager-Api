const mongoose =  require("mongoose");

const TaskManager = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name cannot be empty"],
        trim: true,
        maxLength: [20, "maximum length is 20 characters."]
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("tasks", TaskManager)