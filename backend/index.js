const express = require('express');
const userRoutes = require('./src/usuarios/routes');
const tareasRoutes = require('./src/tareas/routes');
const comentariosRoutes = require('./src/comentarios/routes');
const categoriasRoutes = require('./src/categorias/routes');
const mongoose = require ("mongoose")

const cors = require('cors');


const app = express();

const port = 3000;

app.use(cors());

app.get('/', function (req, res) {
    res.send("hola mundo");
})

app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', tareasRoutes);
app.use('/comments', comentariosRoutes);
app.use('/categories', categoriasRoutes);



const uri = 'mongodb+srv://nuevoUsuario:nuevo123@todolist.jcrpdsl.mongodb.net/Todobd?retryWrites=true&w=majority'

mongoose.connect(uri, (err,)=>{
    if(!err){
        console.log('se conecto a BDD');
        app.listen(port, ()=>{
            console.log("app is running in port " + port)
        })
    }
    else
    {
        console.log('no se conecto///////////////////////////////////////////////////////////////', err)
    }

}); 



