import express = require('express')
import { TasksController } from '../interfaces/controllers/TasksController'
import { MysqlConnection } from './MysqlConnection'

const mysqlConnection = new MysqlConnection()
const tasksController = new TasksController(mysqlConnection)
let router = express.Router()

router.get('/tasks', async (req: express.Request, res: express.Response) => {
  let results = await tasksController.findAllTasks(req, res)
  res.send(results)
})

router.get(
  '/tasks/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await tasksController.findTask(req, res)
    res.send(result)
  }
)

router.post('/tasks', async (req: express.Request, res: express.Response) => {
  let result = await tasksController.createTask(req, res)
  res.send(result)
})

router.patch(
  '/tasks/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await tasksController.updateTask(req, res)
    res.send(result)
  }
)

router.delete(
  '/tasks/:id',
  async (req: express.Request, res: express.Response) => {
    let result = await tasksController.deleteTask(req, res)
    res.send(result)
  }
)

export default router