const Support = require('../../models/_usuario');

const SupportController = {
    
    async getSupports(req, res) {
        try {
            
            const supports = await Support.find();

            return res.status(200).json(supports);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getSupport(req, res) {
        try {
            const { support_id } = req.params;

            const reg = await Support.find({_id: support_id})

            return res.status(200).json(reg);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async createSupport(req, res) {
        try {
            const bodyData = req.body;

            const createdSup = await Support.create(bodyData)

            return res.status(200).json(createdSup);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async updateSupport(req, res) {
        const bodyData = req.body;
        const { support_id } = req.params;
        try{
            const updatedSup = await Support.findByIdAndUpdate(support_id, bodyData, { new: true })

            return res.status(200).json(updatedSup);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async deleteSupport(req, res) {
        const { support_id } = req.params;
        try{
            const deletedSup = await Support.findByIdAndDelete(support_id)

            return res.status(200).json(deletedSup);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = SupportController;