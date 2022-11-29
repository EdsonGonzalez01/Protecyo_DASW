const modeloController = require('./model')
var mongoose = require('mongoose');

function traerTarea(req, res){
    const pending= req.query.pending;
    const boolPending = pending === "true" ? true : false;
    
    if (boolPending){
        res.send("solo tareas pendientes")
    }
    else{
        modeloController.find({prioridad : {$ne:"Completed"}}).then(response =>{
            console.log('Respuesta: ', response)
            res.send(response);
        }
        ).catch(err=>{});
    }
}

function traerTareaporCategoria(req, res){
    const prioridad = req.params.prioridad;
    console.log('Recibi: ' + prioridad);
    modeloController.find({prioridad: prioridad}).then(response =>{
        console.log('Respuesta: ', response)
        res.send(response);
    }
    ).catch(err=>{});
}

function traerUnaTarea(req, res){
    const taskId = req.params.taskId;
    console.log("Estoy trayendo una tarea")
    modeloController.findById(taskId, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log(docs);
            res.send(docs);
        }
    })
    
}

function crearUnaTarea(req,res){
    console.log(req.body);
    const descripcion = req.body.descripcion;
    const observacion = req.body.observacion;
    const prioridad = req.body.prioridad;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

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

function completarUnaTarea(req,res){
    const taskId = req.params.taskId;
    const task = {
        prioridad : "Completed",
    }
    modeloController.findOneAndUpdate({'_id' : taskId}, task).then(response =>{
        if (err) {
            return res.send(500, {error: err});
        }
        else{
            console.log("Respuesta al insertar" + response);
            return res.send('Succesfully saved.' + response);
        }

    }
    ).catch(err=>{
    });

    res.send('Completando tarea ' + taskId)
}

function actualizarUnaTarea(req,res){
    const taskId = req.params.taskId;
    console.log("Actualizando tarea: " + taskId);
    console.log(req.body);
    const descripcion = req.body.descripcion;
    const observacion = req.body.observacion;
    const prioridad = req.body.prioridad;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

    const task = {
        descripcion : descripcion,
        prioridad : prioridad,
        observacion : observacion,
        fecha_inicio :fecha_inicio,
        fecha_fin : fecha_fin
    }

    modeloController.findOneAndUpdate({'_id' : taskId}, task).then(response =>{
        console.log("Respuesta al insertar" + response);
        res.send('Succesfully saved.' + response);
    }
    ).catch(err=>{
        res.send('Ocurrio un error' + err);
    });

}

module.exports = {
    traerUnaTarea,
    traerTarea,
    crearUnaTarea,
    completarUnaTarea,
    actualizarUnaTarea,
    traerTareaporCategoria
}
