'use strict'

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser()
    return await user.projects().fetch()
  }

  // async create({ request, auth }) {
  //   const user = await auth.getUser()
  //   const { title } = request.all()
  //   return await user.projects().create({ title })
  // }

  // async update({ params, request, auth }) {
  //   const user = await auth.getUser()
  //   const { title } = request.all()
  //   const project = await user.projects().where('_id', params.id).first()
  //   project.title = title
  //   return await project.save()
  // }

  // async destroy({ params, auth }) {
  //   const user = await auth.getUser()
  //   const project = await user.projects().where('_id', params.id).first()
  //   return await project.delete()
  // }
}

module.exports = ProjectController
