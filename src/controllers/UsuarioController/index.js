const User = require('../../models/_usuario');

const UserController = {
    
    async getUsers(req, res) {
        try {
            
            const users = await User.find();

            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getUser(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.find({_id: user_id})

            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const bodyData = req.body;

            const createdUser = await User.create(bodyData)

            return res.status(200).json(createdUser);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async updateUser(req, res) {
        const bodyData = req.body;
        const { user_id } = req.params;
        try{
            const updatedUser = await User.findByIdAndUpdate(user_id, bodyData, { new: true })

            return res.status(200).json(updatedUser);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async deleteUser(req, res) {
        const { user_id } = req.params;
        try{
            const deletedUser = await User.findByIdAndDelete(user_id)

            return res.status(200).json(deletedUser);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = UserController;