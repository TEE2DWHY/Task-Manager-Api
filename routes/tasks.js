const router = require("express").Router();
const { getTasks, createTask, updateTask, deleteTask, getTask } = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router