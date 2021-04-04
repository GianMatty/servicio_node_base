const database = require("../data/userDatabase")

const findUsers = () => {
    const response = database.usersDatabase;
    return response;
}
const findUsersById = (req) => {
    const { id_user } = req.params;
    let data = database.usersDatabase;
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}
const saveUser = (req) => {
    const { body } = req;
    database.usersDatabase.push(body);
    let response = database.usersDatabase
    return response;
}

const editUserById = (req) => {
    const { id_user } = req.params;
    const { body } = req;
    let data = database.usersDatabase;
    const user = data.find( usuario => usuario.id.toString() === id_user);
    const userPosition = data.findIndex( usuario => usuario.id.toString() === id_user);
    database.usersDatabase[userPosition] = body;
    let response = database.usersDatabase;
    return response;
}

const deleteUserById = (req) => {
    const { id_user } = req.params;
    let data = database.usersDatabase;
    const userPosition = data.findIndex( usuario => usuario.id.toString() === id_user);
    database.usersDatabase.splice(userPosition, 1)
    let response = database.usersDatabase;
    return response;
}

module.exports = {
    findUsers,
    findUsersById,
    saveUser,
    editUserById,
    deleteUserById
}