//use DIP
import { Task } from '../../domain/models/Task'
import { ITaskRepository } from '../repositories/ITaskRepository'
import moment from 'moment-timezone'

export class CreateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    task.createdAt = moment()
    task.updatedAt = moment()
    return this.taskRepository.persist(task)
  }
}


// import {Task} from '../../domain/models/Task'
// import {TaskRepository} from  '../../interfaces/database/TaskRepository'
// export class CreateTask {
//     execute(title:string,description:string,pool:any){
//         let task = new Task(title,description)
//         const taskRepository = new TaskRepository(pool)
//         return taskRepository.persist(task)
//     }
// }

