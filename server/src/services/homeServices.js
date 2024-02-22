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
            console.log('check body : ', body);
            const user = await db.User.create({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
            });
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
