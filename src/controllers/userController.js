const userService = require("../services/userServices")

const showUsuarios = (req, res) => {
    const usuarios = userService.findUsers();
    res.send(usuarios)
}
const showUsuarioById = (req, res) => { 
    const mensaje = userService.findUsersById(req);
    res.send(mensaje)
}
const saveUsuario = (req, res) => { 
    const mensaje = userService.saveUser(req);
    res.send(mensaje)
}
const editUsuarioById = (req, res) => { 
    const mensaje = userService.editUserById(req);
    res.send(mensaje)
}
const deleteUsuarioById = (req, res) => { 
    const mensaje = userService.deleteUserById(req);
    res.send(mensaje)
}



module.exports = {
    showUsuarios,
    showUsuarioById,
    saveUsuario,
    editUsuarioById,
    deleteUsuarioById 
}