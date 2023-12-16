import express from 'express';
import {authenticateToken} from '../middleware/auth'
import DocumentHandler from '../controllers/doc.controllers'

export  function DocRouts (app: express.Application): void{

    app.post('/insert-doc',authenticateToken, DocumentHandler.insertDocument);
    app.put('/update-doc/:id',authenticateToken,DocumentHandler.updateDocument);
}
