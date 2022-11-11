const Support = require('../../models/_usuario');

const SupportController = {
    
    async getSupports(req, res) {
        try {
            
            const supports = await Support.find();

            return res.status(200).json(supports);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = SupportController;