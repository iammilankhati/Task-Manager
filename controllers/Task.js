const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/CustomError");

//get all the task listed
const getAllTask = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  if (tasks.length < 1) {
    return next(createCustomError(`Database is empty...`, 404));
  }
  return res.status(200).json({ status: "success", data: tasks });
});

//create new task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", data: task });
});

//get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(
      createCustomError(`No data having the id ${req.params.id}`, 404)
    );
  }
  return res.status(200).json({ status: "success", data: task });
});

//update task
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const tasks = await Task.findOneAndUpdate({ taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (tasks.length < 1) {
    return next(createCustomError(`No data having the id ${taskID}`, 404));
  }
  return res.status(200).json({ status: "success", data: tasks });
});

//delete task
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const tasks = await Task.findOneAndDelete(taskID);
  if (tasks.length < 1) {
    return next(createCustomError(`No data having the id ${taskID}`, 404));
  }
  return res.status(200).json({ status: "success", data: tasks });
});

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
