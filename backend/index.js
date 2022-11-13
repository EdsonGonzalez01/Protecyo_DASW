const express = require('express');
const userRoutes = require('./src/usuarios/routes');
const tareasRoutes = require('./src/tareas/routes');
const comentariosRoutes = require('./src/comentarios/routes');
const categoriasRoutes = require('./src/categorias/routes');


const app = express();

const port = 3000;

app.get('', function (req, res) {
    res.send("hola mundo");
})
app.use(express.json())
app.use('/users', userRoutes);
app.use('/tasks', tareasRoutes);
app.use('/comments', comentariosRoutes);
app.use('/categories', categoriasRoutes);

app.listen(port, ()=>{
    console.log("app is running" , port)
})