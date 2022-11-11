const Contact = require('../../models/_usuario');

const ContactController = {
    
    async getContacts(req, res) {
        try {
            
            const contacts = await Contact.find();

            return res.status(200).json(contacts);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = ContactController;