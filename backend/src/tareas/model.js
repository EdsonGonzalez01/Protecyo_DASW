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
            type:String
        },
        fecha_fin: {
            type:String
        }

});

module.exports = model('tareas', schema)