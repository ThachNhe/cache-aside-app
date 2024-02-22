const homeServices = require('../services/homeServices');
const helloWorld = (req, res) => {
    try {
        let data = homeServices.helloWorldService();
        let ok = data;
        console.log('data : ', ok);
        return res.status(200).json('OKOKK');
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};

const createUser = (req, res) => {
    try {
        let data = homeServices.createUserService(req.body);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};
module.exports = {
    helloWorld,
    createUser,
};
