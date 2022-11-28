const modeloController = require('./model')
const tareasModeloController = require('../tareas/model')

function traerCategorias(req, res){
    modeloController.find({}).then(response =>{
        console.log('Respuesta: ', response)
        res.send(response);
    }
    ).catch(err=>{});
}

function traerCategoria(req, res){
    const id = req.body.id;
    const color = req.body.color;
    res.send('Los datos de la categoria ' + id + " " + color + " " + descripcion)
}

function crearCategoria(req,res){
    console.log(req.body);
    const color = req.body.color;
    const descripcion = req.body.descripcion;

    const obj = {
        color: color,
        descripcion : descripcion
    }

    modeloController.create(obj).then(response =>{
        res.send(response);
    }
    ).catch(err=>{});
}

function eliminarCategoria(req,res){
    const id = req.body.id;
    res.send('Eliminando categoria ' + id)
}

function actualizarCategoria(req,res){
    const id = req.body.id;
    const color = req.body.color;
    const descripcion = req.body.descripcion;
    res.send('Actualizando categoria ' + id + " " + color + " " + descripcion)
}

module.exports = {
    traerCategorias,
    traerCategoria,
    crearCategoria,
    eliminarCategoria,
    actualizarCategoria
}
