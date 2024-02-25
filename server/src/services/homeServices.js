import db from '../models/index';
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 2, checkperiod: 2 });
const getAllUsersService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = '';
            data = myCache.get('allUsers');
            if (!data) {
                data = await db.User.findAll();
                myCache.set('allUsers', data);
            }

            resolve({ errCode: 0, data: data });
        } catch (e) {
            reject(e);
        }
    });
};
const getUserByIdService = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = '';
            if (!userId) {
                resolve({ errCode: 1, msg: 'missing required parameter!' });
                return;
            }
            user = myCache.get(userId);
            if (!user) {
                user = await db.User.findOne({ where: { id: userId } });
                myCache.set(userId, user);
            }
            let tmp = myCache.get(userId);
            console.log('cache : ', tmp);
            resolve({ errCode: 0, data: user });
        } catch (e) {
            reject(e);
        }
    });
};
const createUserService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('check body : ', body);
            const user = await db.User.create({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
            });
            myCache.del('allUsers');
            let users = '';
            users = myCache.get('allUsers');
            if (!users) {
                users = await db.User.findAll();
                myCache.set('allUsers', users);
            }
            resolve({ errCode: 0, msg: 'Create user success!' });
        } catch (e) {
            reject(e);
        }
    });
};
const editUserService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('check body : ', body);
            if (!body.id) {
                resolve({ errCode: 1, msg: 'missing required parameter!' });
                return;
            }
            let user = await db.User.findOne({ where: { id: body.id }, raw: false });
            // console.log('user : ', user);
            user.firstName = body.firstName;
            user.lastName = body.lastName;
            user.email = body.email;
            await user.save();
            resolve({ errCode: 0, msg: 'Update user success!' });
            myCache.del(body.id);
            myCache.del('allUsers');
            let cacheUser = await db.User.findOne({ where: { id: body.id } });
            let allUsers = await db.User.findAll();
            myCache.set(body.id, cacheUser);
            myCache.set('allUsers', allUsers);
            let tmp = myCache.get(body.id);
            console.log('cache : ', tmp);
        } catch (e) {
            reject(e);
        }
    });
};
const deleteUserService = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!userId) {
                resolve({ errCode: 1, data: 'Missing required parameter!' });
                return;
            }
            let user = await db.User.findOne({ where: { id: userId }, raw: false });
            // console.log('user del : ', user);
            await user.destroy();
            resolve({ errCode: 0, data: 'Delete user success!' });
            myCache.del(userId);
            myCache.del('allUsers');
            let allUsers = await db.User.findAll();
            myCache.set('allUsers', allUsers);
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    getAllUsersService,
    createUserService,
    getUserByIdService,
    editUserService,
    deleteUserService,
};
