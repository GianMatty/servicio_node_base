const users = require("../data/userDatabase")

const findUsers = () => {
    const data = users.usersDatabase;
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
    const { body } = req;
    users.usersDatabase.push(body)
    console.log(users.usersDatabase)
    const usersUpdated = users.usuarios();
    usersUpdated.push(body);
    console.log(users.usuarios())
    // const user = data.filter( usuario => usuario.id.toString() === id_user);
    // const response = user.length ?  user : "no existe el usuario";
    return body;
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