var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller');
var UsuarioController = require('../app/controllers/usuario_controller');

/* GET home page. */
router.get('/', HomeController.index);
router.get('/usuario.json', UsuarioController.index);
router.post('/usuario.json', UsuarioController.create);
router.put('/usuario/:usuario_id.json', UsuarioController.change);
router.delete('/usuario/:usuario_id.json', UsuarioController.delete);

module.exports = router;
