'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.store')

  // Project CRUD
  Route.get('projects', 'ProjectController.index')
  Route.post('projects/create', 'ProjectController.create')
  Route.delete('projects/:id', 'ProjectController.destroy')
  Route.patch('projects/:id', 'ProjectController.update')
})
  .prefix('api/v1')
  .middleware('auth')
