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
    const id = req.params.id;
    const nombre = req.query.nombre;
    const correo = req.query.correo;
    const password = req.query.password;
    res.send('Creando usuario ' + id + " " + nombre +" " + correo + " " + password);
}

function actualizarUnUsuario(req, res){
    const id = req.params.id;
    const nombre = req.query.nombre;
    const correo = req.query.correo;
    const password = req.query.password;
    res.send('Actualizando usuario ' + id + " " + nombre +" " + correo + " " + password);
}

function eliminarUnUsuario(req, res){
    const id = req.params.id;
    res.send('Borrando usuario ' + id)
}

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUnUsuario,
    actualizarUnUsuario,
    eliminarUnUsuario
}
