import express from 'express';

import DocumentHandler from '../controllers/doc.controllers'

export  function DocRouts (app: express.Application): void{

    app.post('/insert', DocumentHandler.insertDocument);
    app.put('/update/:id',DocumentHandler.updateDocument);
}
