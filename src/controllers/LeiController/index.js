const Law = require('../../models/_usuario');

const LawController = {
    
    async getLaws(req, res) {
        try {
            
            const laws = await Law.find();

            return res.status(200).json(laws);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getLaw(req, res) {
        try {
            const { law_id } = req.params;

            const law = await Law.find({_id: law_id})

            return res.status(200).json(law);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async createLaw(req, res) {
        try {
            const bodyData = req.body;

            const createdLaw = await Law.create(bodyData)

            return res.status(200).json(createdLaw);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async updateLaw(req, res) {
        const bodyData = req.body;
        const { law_id } = req.params;
        try{
            const updatedLaw = await Law.findByIdAndUpdate(law_id, bodyData, { new: true })

            return res.status(200).json(updatedLaw);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async deleteLaw(req, res) {
        const { law_id } = req.params;
        try{
            const deletedLaw = await Law.findByIdAndDelete(law_id)

            return res.status(200).json(deletedLaw);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = LawController;