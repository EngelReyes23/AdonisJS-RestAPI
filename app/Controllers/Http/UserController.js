"use strict";

const User = use("App/Models/User");

class UserController {
  store({ request }) {
    const { email, password } = request.post();

    return User.create({
      email,
      password,
      username: email,
    });
  }
}

module.exports = UserController;
