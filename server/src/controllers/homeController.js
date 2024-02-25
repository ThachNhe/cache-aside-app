const homeServices = require('../services/homeServices');

const getAllUsers = async (req, res) => {
    try {
        let data = await homeServices.getAllUsersService();
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};

const createUser = async (req, res) => {
    try {
        let data = await homeServices.createUserService(req.body);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};
const getUserById = async (req, res) => {
    try {
        let user = await homeServices.getUserByIdService(req.query.id);
        return res.status(200).json(user);
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};
const editUser = async (req, res) => {
    try {
        let data = await homeServices.editUserService(req.body);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server',
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        let data = await homeServices.deleteUserService(req.query.id);
        return res.status(200).json(data);
    } catch (e) {
        return res.status.json({
            errCode: -1,
            errMsg: 'Error from server!',
        });
    }
};
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    editUser,
    deleteUser,
};
