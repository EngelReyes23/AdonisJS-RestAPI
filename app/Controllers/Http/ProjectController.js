'use strict'

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

  async destroy({ params, auth, response }) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)
    if (!project) return response.status(403).send({ message: 'Project not found' })
    if (project.user_id === user.id) {
      await project.delete()
      return project
    } else
      return response.status(403).send({ message: 'You are not allowed to delete this project' })
  }

  async update({ params, request, response }) {
    const { id } = params
    const project = await Project.find(id)
    if (!project) return response.status(403).send({ message: 'Project not found' })
    project.merge(request.only(['title', 'description']))
    await project.save()
    return project
  }
}

module.exports = ProjectController
