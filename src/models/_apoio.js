const mongoose = require('mongoose');
const shortid = require('shortid');

const Apoio = new mongoose.Schema({
    _id: { type: String, 'default': shortid.generate },
    id_usuario: { type: String, ref: 'Usuario' },
    dt_solic_apoio: { type: Date }
});

module.exports = mongoose.model('Apoio', Apoio);