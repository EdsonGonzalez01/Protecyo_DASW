const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerUsuarios)
router.get('/:id', authMiddelware,  controlador.traerUnUsuario);
router.get('/create/:id/', authMiddelware,  controlador.crearUnUsuario);
router.get('/update/:id', authMiddelware,  controlador.actualizarUnUsuario);
router.get('/delete/:id', authMiddelware,  controlador.eliminarUnUsuario);

module.exports = router;