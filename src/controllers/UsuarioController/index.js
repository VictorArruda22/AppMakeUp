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
            
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = UserController;