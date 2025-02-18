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
  Route.get('projects', 'ProjectController.index').middleware('auth')
  Route.patch('projects/:id', 'ProjectController.update').middleware('auth')
  Route.post('projects/create', 'ProjectController.create').middleware('auth')
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth')

  // Task CRUD
  Route.patch('tasks/:id', 'TaskController.update').middleware('auth')
  Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth')
  Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth')
  Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth')
}).prefix('api/v1')
