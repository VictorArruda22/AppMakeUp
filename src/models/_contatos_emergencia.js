const mongoose = require('mongoose');
const shortid = require('shortid');

const ContatoEmerg = new mongoose.Schema({
    _id: { type: String, 'default': shortid.generate },
    id_pessoa: { type: String, ref: 'Usuario' },
    nome: { type: String },
    telefone: { type: Number },
    observacao: { type: String },
});

module.exports = mongoose.model('ContatoEmerg', ContatoEmerg);