const {Schema, modul }=require('mongoose');

const schema=new Schema
(
    {
        id: {
            type:String
        },
        idTarea: {
            type:String
        },
        descripcion: {
            type:String
        },
        usuario: {
            type:String
        },
        fecha: {
            type:Date
        }

         

    });

    module.exports = model('comentario',schema );