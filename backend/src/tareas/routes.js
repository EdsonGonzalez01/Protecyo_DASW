const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerTarea)
router.get('/:id', authMiddelware,  controlador.traerUnaTarea);
router.get('/create/:id', authMiddelware,  controlador.crearUnaTarea);
router.get('/delete/:id', authMiddelware,  controlador.eliminarUnaTarea);
router.get('/update/:id', authMiddelware,  controlador.actualizarUnaTarea);

module.exports = router;