const { Schema, model } = require ("mongoose")

const schema=new Schema({
    color: {
        type:String
    },
    descripcion: {
        type:String
    }
});

module.exports = model('Categorias', schema);