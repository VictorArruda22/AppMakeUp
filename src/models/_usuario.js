const mongoose = require('mongoose');
const shortid = require('shortid');

const Usuario = new mongoose.Schema({
    _id: { type: String, 'default': shortid.generate },
    id_cadastro: { type: String, ref: 'CadastroInicial' },
    access_token: { type: String },
    id_lista_solic_apoio: [{ type: String, ref: 'Apoio' }],
    id_lista_contatos: [{ type: String, ref: 'ContatoEmerg' }],
    dt_acesso: { type: Date },
});

module.exports = mongoose.model('Usuario', Usuario);