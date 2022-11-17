const Contact = require('../../models/_usuario');

const ContactController = {
    
    async getContacts(req, res) {
        try {
            
            const contacts = await Contact.find();

            return res.status(200).json(contacts);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async getContact(req, res) {
        try {
            const { contact_id } = req.params;

            const contact = await Contact.find({_id: contact_id})

            return res.status(200).json(contact);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async createContact(req, res) {
        try {
            const bodyData = req.body;

            const createdContact = await Contact.create(bodyData)

            return res.status(200).json(createdContact);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async updateContact(req, res) {
        const bodyData = req.body;
        const { contact_id } = req.params;
        try{
            const updatedContact = await Contact.findByIdAndUpdate(contact_id, bodyData, { new: true })

            return res.status(200).json(updatedContact);
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    async deleteContact(req, res) {
        const { contact_id } = req.params;
        try{
            const deletedContact = await Contact.findByIdAndDelete(contact_id)

            return res.status(200).json(deletedContact);
        } catch(err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = ContactController;