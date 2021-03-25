const users = require("../data/userDatabase")

const findUsers = () => {
    const data = users.usuarios();
    return data
}
const findUsersById = (req) => {
    const { id_user } = req.params;
    let data = users.usuarios();
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}
const saveUser = (req) => {
    const { id_user } = req.params;
    console.log("aaaa",req)

    let data = users.usuarios();
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}
const editUserById = (req) => {
    const { id_user } = req.params;
    let data = users.usuarios();
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}
const deleteUserById = (req) => {
    const { id_user } = req.params;
    let data = users.usuarios();
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}

module.exports = {
    findUsers,
    findUsersById,
    saveUser,
    editUserById,
    deleteUserById
}