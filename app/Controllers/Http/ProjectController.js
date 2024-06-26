'use strict'

const AuthorizationService = require('../../Services/AuthorizationService')

const Project = use('App/Models/Project')

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser()
    return await user.projects().fetch()
  }

  async create({ request, auth }) {
    const user = await auth.getUser()
    const { title, description } = request.all()
    const project = new Project()

    project.fill({
      title,
      description
    })

    await user.projects().save(project)
    return project
  }

  async destroy({ params, auth }) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)

    AuthorizationService.verifyOwner(project, user)

    await project.delete()
    return project
  }

  async update({ params, request, auth }) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)

    AuthorizationService.verifyOwner(project, user)

    project.merge(request.only(['title', 'description']))
    await project.save()
    return project
  }
}

module.exports = ProjectController
