const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerUsuarios)
router.get('/:id', authMiddelware,  controlador.traerUnUsuario);
router.post('/create', authMiddelware, controlador.crearUnUsuario);
router.put('/update', authMiddelware,  controlador.actualizarUnUsuario);
router.delete('/delete', authMiddelware,  controlador.eliminarUnUsuario);

module.exports = router;