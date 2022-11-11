const express = require('express');
const routes = express.Router();

const UsuarioController = require('../controllers/UsuarioController');
const LeiController = require('../controllers/LeiController');
const ContatoController = require('../controllers/ContatoController');
const ApoioController = require('../controllers/ApoioController');
const SoSController = require('../controllers/SosController');

//teste2
routes.get('/', async (req, res) => {
    res.status(200).json({ message: 'OK' })
});

//USUARIO
routes.get('/users', UsuarioController.getUsers);
routes.get('/user/:user_id', UsuarioController.getUsers);
routes.post('/users', UsuarioController.getUsers);
routes.patch('/user/:user_id', UsuarioController.getUsers);
routes.delete('/user/:user_id', UsuarioController.getUsers);

//LEIS
routes.get('/laws', LeiController.getLaws);
routes.get('/law/:law_id', LeiController.getLaws);
routes.post('/laws', LeiController.getLaws);
routes.patch('/law/:law_id', LeiController.getLaws);
routes.delete('/law/:law_id', LeiController.getLaws);

//CONTATOS EMERGENCIAIS
routes.get('/contacts', ContatoController.getContacts);
routes.get('/contact/:law_id', ContatoController.getContacts);
routes.post('/contacts', ContatoController.getContacts);
routes.patch('/contact/:law_id', ContatoController.getContacts);
routes.delete('/contact/:law_id', ContatoController.getContacts);

//REGISTROS APOIO
routes.get('/supports', ApoioController.getSupports);
routes.get('/support/:law_id', ApoioController.getSupports);
routes.post('/supports', ApoioController.getSupports);
routes.patch('/support/:law_id', ApoioController.getSupports);
routes.delete('/support/:law_id', ApoioController.getSupports);

//ENVIO SMS SOS
routes.post('/sendMsg/sos', SoSController.sendMsg);

module.exports = routes;