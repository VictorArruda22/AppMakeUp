const mongoose = require('mongoose');
const shortid = require('shortid');

const Leis = new mongoose.Schema({
    _id: { type: String, 'default': shortid.generate },
    leis_uteis: [{ type: String }]
});

module.exports = mongoose.model('Leis', Leis);