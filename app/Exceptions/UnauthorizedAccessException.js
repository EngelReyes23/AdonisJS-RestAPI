'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UnauthorizedAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(_, { response }) {
    return response.status(403).send({ message: 'You are not allowed to delete this project' })
  }
}

module.exports = UnauthorizedAccessException
