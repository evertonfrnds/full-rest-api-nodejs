const express = require('express')
const routes = express.Router()

const userController = require('./controllers/UserController')

routes
    //user
    .post('/users', userController.create)
    //authentication
    .post('/auth', userController.auth)

module.exports = routes;