// const express = require('express');
import homeController from '../controllers/homeController';
import express from 'express';
const router = express.Router();
const initWebRoute = (app) => {
    router.get('/users', homeController.getAllUsers);
    router.get('/user', homeController.getUserById);
    router.post('/user', homeController.createUser);
    router.put('/user', homeController.editUser);
    router.delete('/user', homeController.deleteUser);
    return app.use('/api', router);
};

module.exports = initWebRoute;
