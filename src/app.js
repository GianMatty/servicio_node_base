const express = require('express')
const app = express()

//Settings
app.set('PORT', process.env.PORT || 3001)

//Middlewares

//Routes
app.get( '/', (req, res) => {
    res.send("HOLA MUNDO")
})

//Starting the server
app.listen( app.get('PORT'), () => {
    console.log(`El servidor se levanto en el puerto ${app.get('PORT')}`);
})