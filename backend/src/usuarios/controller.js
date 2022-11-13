function traerUsuarios(req, res){
    const activos = req.query.activos;
    const boolActivos = activos === "true" ? true : false;
    
    if (boolActivos){
        res.send("solo usuarios activos")
    }
    else{
        res.send('todos los usuarios')
    }
}

function traerUnUsuario(req, res){
    const id = req.params.id;
    res.send('Los datos del usuario ' + id)
}

function crearUnUsuario(req, res){
    const id = req.body.id;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = req.body.password;
    res.send('Creando usuario ' + id + " " + nombre +" " + correo + " " + password);
}

function actualizarUnUsuario(req, res){
    const id = req.body.id;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = req.body.password;
    res.send('Actualizando usuario ' + id + " " + nombre +" " + correo + " " + password);
}

function eliminarUnUsuario(req, res){
    const id = req.body.id;
    res.send('Borrando usuario ' + id)
}

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUnUsuario,
    actualizarUnUsuario,
    eliminarUnUsuario
}
