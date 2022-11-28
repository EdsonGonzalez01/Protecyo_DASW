const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerCategorias)
router.get('/:descripcion', authMiddelware,  controlador.traerCategoria);
router.post('/create', authMiddelware, controlador.crearCategoria);
router.put('/update', authMiddelware,  controlador.actualizarCategoria);
router.delete('/delete', authMiddelware,  controlador.eliminarCategoria);

module.exports = router;