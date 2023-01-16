const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    
})

module.exports = mongoose.model("User", userSchema)



//EJEMPLO
/*
const TareaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
})

module.exports = mongoose.model('Tarea', TareaSchema)//creamos un modelo y su structura
*/