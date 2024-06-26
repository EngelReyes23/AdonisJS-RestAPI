const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException')
const UnauthorizedAccessException = use('App/Exceptions/UnauthorizedAccessException')

class AuthorizationService {
  verifyOwner(resource, user) {
    if (!resource) throw new ResourceNotFoundException()

    if (resource.user_id !== user.id) throw new UnauthorizedAccessException()
  }
}

module.exports = new AuthorizationService()
