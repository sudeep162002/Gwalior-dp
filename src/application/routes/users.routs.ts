import express from 'express';

import UsersHandler from '../controllers/users.controllers'

export  function UserRouts(app: express.Application): void{
    app.get('/get-users', UsersHandler.getUsers);
}