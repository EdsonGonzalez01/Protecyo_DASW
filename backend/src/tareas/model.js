const { Schema, model } = require ("mongoose")

const schema = new Schema({
    descripcion: {
        type:String
    },
    prioridad: {
        type:String
    },
    observacion: {
        type:String
    },        
    fecha_inicio: {
        type:Date
    },
    fecha_fin: {
        type:Date
    }
});

module.exports = model('tareas', schema)