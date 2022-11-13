const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerTarea)
router.get('/:id', authMiddelware,  controlador.traerUnaTarea);
router.post('/create', authMiddelware,  controlador.crearUnaTarea);
router.delete('/delete', authMiddelware,  controlador.eliminarUnaTarea);
router.put('/update', authMiddelware,  controlador.actualizarUnaTarea);

module.exports = router;