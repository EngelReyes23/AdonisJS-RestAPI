'use strict'

const AuthorizationService = require('../../Services/AuthorizationService')

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')

class TaskController {
  async index({ auth, request }) {
    const user = await auth.getUser()
    const { id } = request.params

    const project = await Project.find(id)
    AuthorizationService.verifyOwner(project, user)

    return await project.tasks().fetch()
  }

  async create({ auth, request }) {
    const user = await auth.getUser()
    const { title, description, isCompleted } = request.all()
    const { id } = request.params

    const project = await Project.find(id)
    AuthorizationService.verifyOwner(project, user)

    const task = new Task()
    task.fill({
      title,
      description,
      isCompleted
    })

    await project.tasks().save(task)
    return task
  }

  async destroy({ auth, request }) {
    const user = await auth.getUser()
    const { id } = request.params
    const task = await Task.find(id)
    const project = await task.project().fetch()

    AuthorizationService.verifyOwner(project, user)

    await task.delete()
    return task
  }

  async update({ auth, request }) {
    const user = await auth.getUser()
    const { id } = request.params
    const task = await Task.find(id)
    const project = await task.project().fetch()

    AuthorizationService.verifyOwner(project, user)

    task.merge(request.only(['title', 'description', 'isCompleted']))

    await task.save()
    return task
  }
}

module.exports = TaskController
