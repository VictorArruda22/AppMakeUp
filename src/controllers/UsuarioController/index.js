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
    }
};

module.exports = UserController;