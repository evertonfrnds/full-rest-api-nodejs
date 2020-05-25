const express = require('express')
const userController = require('./controllers/UserController')
const projectController = require('./controllers/ProjectController')
const authMiddleware = require('./middleware/auth')

const routes = express.Router()
routes
    //user
    .post('/users', userController.register)
    //authentication
    .post('/auth', userController.auth)
    
    //projects
    .get('/projects',authMiddleware, projectController.index)

module.exports = routes;