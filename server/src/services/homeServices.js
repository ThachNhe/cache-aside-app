import db from '../models/index';

const helloWorldService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve({ arrCode: 0, data: 'oijojoijoi' });
        } catch (e) {
            reject(e);
        }
    });
};
const createUserService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.Users.create({ username: body.username, password: body.password });
            resolve({ errCode: 0, msg: 'Create user success!' });
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    helloWorldService,
    createUserService,
};
