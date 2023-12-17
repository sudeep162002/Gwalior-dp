import express from 'express';
import {authenticateToken} from '../middleware/auth'
import UsersHandler from '../controllers/users.controllers'

export  function UserRouts(app: express.Application): void{
    app.get('/get-users',authenticateToken, UsersHandler.getUsers);
    app.get('/get-users/:id',authenticateToken, UsersHandler.getUsersById);
    app.post('/insert-user',authenticateToken, UsersHandler.insertUser);
    app.put('/update-user/:id',authenticateToken,UsersHandler.updateUser);

}