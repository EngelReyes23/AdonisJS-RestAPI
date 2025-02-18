'use strict'

const User = use('App/Models/User')

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.post()
    const token = await auth.attempt(email, password)
    return token
  }

  async store({ request }) {
    const { email, password } = request.post()
    const user = await User.create({ email, password, username: email })
    console.log('🚀 ~ UserController ~ store ~ user:', user)
    return this.login(...arguments)
  }
}

module.exports = UserController
