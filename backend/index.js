const express = require('express');
const userRoutes = require('./src/usuarios/routes')
const tareasRoutes = require('./src/tareas/routes')

const app = express();

const port = 3000;

app.get('', function (req, res) {
    res.send("hola mundo");
})

app.use('/users', userRoutes);
app.use('/tasks', tareasRoutes);

app.listen(port, ()=>{
    console.log("app is running" , port)
})