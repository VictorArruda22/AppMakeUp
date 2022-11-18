const express = require('express');
const routes = express.Router();

const UsuarioController = require('../controllers/UsuarioController');
const LeiController = require('../controllers/LeiController');
const ContatoController = require('../controllers/ContatoController');
const ApoioController = require('../controllers/ApoioController');
const SoSController = require('../controllers/SosController');

const { authenticate  } = require('../middlewares');

routes.get('/', async (req, res) => {
    res.status(200).json({ message: 'OK' })
});

//USUARIO
routes.get('/users', authenticate, UsuarioController.getUsers);
routes.get('/user/:user_id', authenticate, UsuarioController.getUser);
routes.post('/users', authenticate, UsuarioController.createUser);
routes.patch('/user/:user_id', authenticate, UsuarioController.updateUser);
routes.delete('/user/:user_id', authenticate, UsuarioController.deleteUser);

//LEIS
routes.get('/laws', authenticate, LeiController.getLaws);
routes.get('/law/:law_id', authenticate, LeiController.getLaws);
routes.post('/laws', authenticate, LeiController.getLaws);
routes.patch('/law/:law_id', authenticate, LeiController.getLaws);
routes.delete('/law/:law_id', authenticate, LeiController.getLaws);

//CONTATOS EMERGENCIAIS
routes.get('/contacts', authenticate, ContatoController.getContacts);
routes.get('/contact/:contact_id', authenticate, ContatoController.getContacts);
routes.post('/contacts', authenticate, ContatoController.getContacts);
routes.patch('/contact/:contact_id', authenticate, ContatoController.getContacts);
routes.delete('/contact/:contact_id', authenticate, ContatoController.getContacts);

//REGISTROS APOIO
routes.get('/supports', authenticate, ApoioController.getSupports);
routes.get('/support/:law_id', authenticate, ApoioController.getSupports);
routes.post('/supports', authenticate, ApoioController.getSupports);
routes.patch('/support/:law_id', authenticate, ApoioController.getSupports);
routes.delete('/support/:law_id', authenticate, ApoioController.getSupports);

//ENVIO SMS SOS
routes.post('/sendMsg/sos', authenticate, SoSController.sendMsg);

module.exports = routes;