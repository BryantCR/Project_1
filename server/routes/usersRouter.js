const express = require( 'express' );
const UserRouter = express.Router();
const {UsersController} = require( './../controllers/usersController' );

UserRouter
    .post('/register', UsersController.createNewUser)

UserRouter
    .post('/login', UsersController.login)

module.exports = { UserRouter };