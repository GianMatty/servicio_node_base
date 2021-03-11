const express = require('express')
const userRouter = require('./routes/userRoutes')
const {mongoose} = require('./config/database')
const app = express()

//Settings 
app.set('port', process.env.PORT || 3002)

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Routes
app.use('/user', userRouter)

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`El servidor esta encendido en el puerto ${app.get('port')}`)
})