const userServices = require('../services/userService')

const mostrar = async (req, res) => {
    const mensaje = await userServices.findUser()
    res.send(mensaje)
}
const buscar = (req, res) => {
    const mensaje =  userServices.findUserById()
    res.send(mensaje)
}

module.exports = {
    mostrar,
    buscar
}