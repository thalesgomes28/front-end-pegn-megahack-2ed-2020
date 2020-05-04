const express = require('express').Router;

const routes = express();
const controllerCadastro = require('../controllers/controllerCadastro');
const controllerAuth = require('../controllers/controllerLogin');


routes.get('/', (req, res) => {
    res.send('API');
});


// CADASTRO, LEITURA, REMOÇÃO E ALTERAÇÃO DOS DADOS DAS EMPRESAS;
routes.post('/cadastro', controllerCadastro.create);
routes.get('/cadastro', controllerCadastro.index);
// routes.delete('/cadastro', controllerCadastro.delete);
routes.put('/cadastro', controllerCadastro.alter);


// LOGIN DE PESSOAS
routes.post('/login', controllerAuth.auth);


module.exports = routes;