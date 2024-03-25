const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/creacion', userController.creacionDeLibros);
router.get('/listarlibros', userController.obtenerTodosLosLibros);
router.get('/buscar', userController.consultarLibros);
router.patch('/actualizarlibro/:nombre', userController.actualizarLibro);
router.delete('/eliminarlibro/:referencia', userController.eliminarLibro);

module.exports = router;
