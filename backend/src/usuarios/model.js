const {Schema, model }=require('mongoose');

const schema=new Schema
(
    {
        id: {
            type:String
        },
        nombre: {
            type:String
        },
        correo: {
            type:String
        },
        password: {
            type:String
        }

    });

module.exports = model('usuario',schema );