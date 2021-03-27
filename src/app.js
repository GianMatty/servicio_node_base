const express = require('express')
const userRouter = require('./routes/userRoute')

const app = express()

//Settings
app.set('PORT', process.env.PORT || 3001)

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/user', userRouter)

//Starting the server
app.listen( app.get('PORT'), () => {
    console.log(`El servidor se levanto en el puerto ${app.get('PORT')}`);
})