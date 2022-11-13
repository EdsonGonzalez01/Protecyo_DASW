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
    const id = req.body.id;
    const descripcion = req.body.nombre;
    const prioridad = req.body.correo;
    const fecha_inicio = req.body.password;
    const fecha_fin = req.body.password;
    res.send('Los datos de la tarea ' + id + " " + descripcion + " " + prioridad + " " + fecha_inicio + " " + fecha_fin)
    /*
        identificador
        descripcion
        fecha de creacion
        fecha de vencimiento
        usuarios
    */ 
}

function crearUnaTarea(req,res){
    const id = req.body.id;
    const descripcion = req.body.nombre;
    const prioridad = req.body.correo;
    const fecha_inicio = req.body.password;
    const fecha_fin = req.body.password;
    res.send('Creando tarea ' + id + " " + descripcion + " " + prioridad + " " + fecha_inicio + " " + fecha_fin)
}

function eliminarUnaTarea(req,res){
    const id = req.body.id;
    res.send('Eliminando tarea ' + id)
}

function actualizarUnaTarea(req,res){
    const id = req.body.id;
    const descripcion = req.body.nombre;
    const prioridad = req.body.correo;
    const fecha_inicio = req.body.password;
    const fecha_fin = req.body.password;
    res.send('Actualizando tarea ' + id + " " + descripcion + " " + prioridad + " " + fecha_inicio + " " + fecha_fin);
}

module.exports = {
    traerUnaTarea,
    traerTarea,
    crearUnaTarea,
    eliminarUnaTarea,
    actualizarUnaTarea
}
