import homeServices from '../services/homeServices';

let helloWorld = (req, res) => {
    try {
        let data = homeServices.helloWorldService();
        let ok = data;
        console.log('data : ', ok);
        return res.status(200).json('OKOKK');
        // res.send(JSON.stringify(data.data));
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};
let createUser = async (req, res) => {
    try {
        let data = await homeServices.createUserService(req.body);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};

module.exports = {
    helloWorld,
    createUser,
};
