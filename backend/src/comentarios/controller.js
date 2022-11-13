function traerComentarios(req, res){
    const idTarea = req.body.idTarea;
    res.send('todos los comentarios de la tarea ' + idTarea)
}

function traerComentario(req, res){
    const id = req.body.id;
    const idTarea = req.body.idTarea;
    const descripcion = req.body.descripcion;
    const usuario = req.body.usuario;
    const fecha = req.body.fecha;
    res.send('Los datos del comentario ' + id + " " + idTarea + " " + descripcion + " " + usuario + " " + fecha )
}

function crearUnComentario(req,res){
    const id = req.body.id;
    const idTarea = req.body.idTarea;
    const descripcion = req.body.descripcion;
    const usuario = req.body.usuario;
    const fecha = req.body.fecha;
    res.send('Creando comentario ' + id + " " + descripcion + " " + usuario + " " + fecha + " en la tarea " + idTarea)
}

function eliminarUnComentario(req,res){
    const id = req.body.id;
    const idTarea = req.body.idTarea;
    res.send('Eliminando comentario ' + id + " de la tarea " + idTarea)
}

function editarUnComentario(req,res){
    const id = req.body.id;
    const idTarea = req.body.idTarea;
    const descripcion = req.body.descripcion;
    const usuario = req.body.usuario;
    const fecha = req.body.fecha;
    res.send('Actualizando comentario ' + id + " " + descripcion + " " + usuario + " " + fecha + "en la tarea " + idTarea)
}

module.exports = {
    traerComentarios,
    traerComentario,
    crearUnComentario,
    eliminarUnComentario,
    editarUnComentario
}
