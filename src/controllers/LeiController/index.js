const Law = require('../../models/_usuario');

const LawController = {
    
    async getLaws(req, res) {
        try {
            
            const laws = await Law.find();

            return res.status(200).json(laws);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = LawController;