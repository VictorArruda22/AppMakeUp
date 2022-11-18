const Registration = require('../../models/_usuario');

const RegistrationController = {
    
    async getRegs(req, res) {
        try {
            
            const regs = await Registration.find();

            return res.status(200).json(regs);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getReg(req, res) {
        try {
            const { reg_id } = req.params;

            const reg = await Registration.find({_id: reg_id})

            return res.status(200).json(reg);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async createReg(req, res) {
        try {
            const bodyData = req.body;

            const createdReg = await Registration.create(bodyData)

            return res.status(200).json(createdReg);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async updateReg(req, res) {
        const bodyData = req.body;
        const { reg_id } = req.params;
        try{
            const updatedReg = await Registration.findByIdAndUpdate(reg_id, bodyData, { new: true })

            return res.status(200).json(updatedReg);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async deleteReg(req, res) {
        const { reg_id } = req.params;
        try{
            const deletedReg = await Registration.findByIdAndDelete(reg_id)

            return res.status(200).json(deletedReg);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = RegistrationController;