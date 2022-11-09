function traerTarea(req, res){
    const pending= req.query.pending;
    const boolPending = pending === "true" ? true : false;
    
    if (boolPending){
        res.send("solo tareas pendientes")
    }
    else{
        res.send('todas las tareas')
    }
}

function traerUnaTarea(req, res){
    const id = req.params.id;
    res.send('Los datos de la tarea ' + id)
    /*
        identificador
        descripcion
        fecha de creacion
        fecha de vencimiento
        usuarios
    */ 
}

function crearUnaTarea(req,res){
    const id = req.params.id;
    res.send('Creando tarea ' + id)
}

function eliminarUnaTarea(req,res){
    const id = req.params.id;
    res.send('Eliminando tarea ' + id)
}

function actualizarUnaTarea(req,res){
    const id = req.params.id;
    res.send('Actualizando tarea ' + id)
}

module.exports = {
    traerUnaTarea,
    traerTarea,
    crearUnaTarea,
    eliminarUnaTarea,
    actualizarUnaTarea
}
