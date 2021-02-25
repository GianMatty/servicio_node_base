const express = require('express')
const app = express()

//Settings

//Middlewares

//Routes
app.get( '/', (req, res) => {
    res.send("HOLA MUNDO")
})

//Starting the server
app.listen( 3000, () => {
    console.log("El servidor se levanto en el puerto 3000");
})