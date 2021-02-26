const userService = require("../services/userServices")

const showUsuarios = (req, res) => {
    const usuarios = userService.findUsers();
    res.send(usuarios)
}
const showUsuarioById = (req, res) => {
    const { id_user } = req.params;
    const mensaje = userService.findUsersById(id_user);
    res.send(mensaje)
}

module.exports = {
    showUsuarios,
    showUsuarioById
}