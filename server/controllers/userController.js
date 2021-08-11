const UserModel = require('../models/userSchema');

const getAllUsers = async (req, res) => {
    try {
        await UserModel.find({}, (err, result) => {
            if (err) throw err
            res.json({ message: "Success", data: result })
        })
    } catch (error) {
        res.json({ message: "Database problem", error: error })
    }
}

const getUserById = async (req, res) => {
    try {
        await UserModel.findById(req.params.id, (err, result) => {
            if (err) throw err
            res.json({ message: "success", data: result })
        })
    } catch (error) {
        res.json({ message: "Database problem", error: error })
    }
}


const createNewUser = async (req, res) => {
    try {
        await UserModel.insertMany(req.body, (err, result) => {
            if (err) throw err
            res.json({ message: "success", data: result })
        })
    } catch (error) {
        res.json({ message: "Database problem", error: error })
    }
}


const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) throw err
            res.json({ message: "success", data: result })
        })
    } catch (error) {
        res.json({ message: "Database problem", error: error })
    }
}


const updateUser = async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
            if (err) throw err
            res.json({ message: "success", data: req.body })
        })
    } catch (error) {
        res.json({ message: "Database problem", error: error })
    }
}

module.exports = {
    updateUser,
    deleteUser,
    createNewUser,
    getUserById,
    getAllUsers
}
