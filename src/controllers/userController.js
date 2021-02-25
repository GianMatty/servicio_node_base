const userService = require("../services/userServices")

const showUsuarios = (req, res) => {
    const mensaje = userService.findUsers();
    res.send(mensaje)
}
const showUsuarioById = (req, res) => {
    const mensaje = userService.findUsersById();
    res.send(mensaje)
}

module.exports = {
    showUsuarios,
    showUsuarioById
}