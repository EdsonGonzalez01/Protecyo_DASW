const modeloController = require('./model')

function traerTarea(req, res){
    const pending= req.query.pending;
    const boolPending = pending === "true" ? true : false;
    
    if (boolPending){
        res.send("solo tareas pendientes")
    }
    else{
        modeloController.find({}).then(response =>{
            console.log('Respuesta: ', response)
            res.send(response);
        }
        ).catch(err=>{});
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
    console.log(req.body);
    const descripcion = req.body.descripcion;
    const observacion = req.body.observation;
    const prioridad = req.body.priority;
    const fecha_inicio = req.body.start_Date;
    const fecha_fin = req.body.end_Date;

    const obj = {
        descripcion : descripcion,
        prioridad : prioridad,
        observacion : observacion,
        fecha_inicio :fecha_inicio,
        fecha_fin : fecha_fin
    }

    modeloController.create(obj).then(response =>{
        res.send(response);
    }
    ).catch(err=>{});


    //res.send('Creando tarea ' + id + " " + descripcion + " " + prioridad + " " + fecha_inicio + " " + fecha_fin);

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
