// const express = require('express');
import homeController from '../controllers/homeController';
import express from 'express';
const router = express.Router();
const initWebRoute = (app) => {
    router.get('/hello', homeController.helloWorld);
    router.post('/user', homeController.createUser);
    return app.use('/api', router);
};

module.exports = initWebRoute;
