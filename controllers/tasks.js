const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json(tasks)
})

const createTask = asyncWrapper(async (req, res) => {
  const isExist = await Task.findOne({ id: req.body.id })
  if (isExist) {
    res.status(404).json({ msg: `Token ID ${req.body.id} is existed` })
  } else {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  }

})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ id: taskID })
  if (!task) {
    res.status(404).json({ msg: `No task with id : ${taskID}` })
  } else {
    res.status(200).json(task)
  }

})

// const deleteTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params
//   const task = await Task.findOneAndDelete({ _id: taskID })
//   if (!task) {
//     return next(createCustomError(`No task with id : ${taskID}`, 404))
//   }
//   res.status(200).json({ task })
// })
// const updateTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params

//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//   })

//   if (!task) {
//     return next(createCustomError(`No task with id : ${taskID}`, 404))
//   }

//   res.status(200).json({ task })
// })

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  // updateTask,
  // deleteTask,
}
