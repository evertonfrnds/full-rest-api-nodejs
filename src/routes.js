const express = require('express')
const userController = require('./app/controllers/UserController')
const projectController = require('./app/controllers/ProjectController')
const authMiddleware = require('./app/middleware/auth')

const routes = express.Router()
routes
    //user
    .post('/users', userController.register)
    //authentication
    .post('/auth', userController.auth)
    
    //projects
    .get('/projects',authMiddleware, projectController.index)
    .post('/projects',authMiddleware, projectController.create)
    .put('/projects/:id',authMiddleware, projectController.update)
    .delete('/projects/:id',authMiddleware, projectController.delete)

module.exports = routes;