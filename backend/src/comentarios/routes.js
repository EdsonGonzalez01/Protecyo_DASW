const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerComentario)
router.get('/:id', authMiddelware,  controlador.traerComentarios);
router.post('/create', authMiddelware, controlador.crearUnComentario);
router.put('/update', authMiddelware,  controlador.editarUnComentario);
router.delete('/delete', authMiddelware,  controlador.eliminarUnComentario);

module.exports = router;