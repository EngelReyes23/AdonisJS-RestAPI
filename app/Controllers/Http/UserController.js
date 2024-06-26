"use strict";

class UserController {
  store({ request }) {
    return {
      message: "User created",
      data: request.all(),
    };
  }
}

module.exports = UserController;
