const mongoose = require('mongoose');
const shortid = require('shortid');

const CadastroInicial = new mongoose.Schema({
    _id: { type: String, 'default': shortid.generate },
    nome: { type: String },
    idade: { type: Number, max: 2 },
    email: { type: String },
    dt_registro: { type: Date },
    telefone: { type: Number },
    observacao: { type: String },
});

module.exports = mongoose.model('CadastroInicial', CadastroInicial);