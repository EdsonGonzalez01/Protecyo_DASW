const router = require('express').Router();
const controlador = require('./controller')
const authMiddelware = require('../middlewares/auth');


//rutas

router.get('/', authMiddelware, controlador.traerTarea)
router.get('/:taskId', authMiddelware,  controlador.traerUnaTarea);
router.get('/category/:prioridad', authMiddelware,  controlador.traerTareaporCategoria);
router.post('/create', authMiddelware,  controlador.crearUnaTarea);
router.delete('/delete', authMiddelware,  controlador.eliminarUnaTarea);
router.put('/update/:taskId', authMiddelware,  controlador.actualizarUnaTarea);

module.exports = router;