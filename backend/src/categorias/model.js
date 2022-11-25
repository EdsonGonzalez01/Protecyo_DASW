const {Schema, modul }=require('mogoose');

const schema=new Schema
(
    {
        id: {
            type:String
        },
        color: {
            type:String
        },
        descripcion: {
            type:String
        }

});

module.exports = model('categoria',schema );