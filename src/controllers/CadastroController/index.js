const Registration = require('../../models/_usuario');

const RegistrationController = {
    
    async getLaws(req, res) {
        try {
            
            const regs = await Registration.find();

            return res.status(200).json(regs);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = RegistrationController;