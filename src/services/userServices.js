const fs = require('fs');
// const database = require("../data/userDatabase")



const database_users = fs.readFileSync('src/data/users.json', 'utf-8'); //Para extraer los datos del archivo.json
const usersDatabase = JSON.parse(database_users);

const findUsers = () => {
    const response = usersDatabase;
    return response;
}
const findUsersById = (req) => {
    const { id_user } = req.params;
    let data = usersDatabase;
    const user = data.filter( usuario => usuario.id.toString() === id_user);
    const response = user.length ?  user : "no existe el usuario";
    return response;
}
const saveUser = (req) => {
    const { body } = req;
    usersDatabase.push(body);
    let response = usersDatabase;
    const json_users = JSON.stringify(usersDatabase);
    fs.writeFileSync('src/data/users.json', json_users, 'utf-8'); //Para guardar en un archivo de manera sincrona (busca la ruta desde el inicio)
    return response;
}

const editUserById = (req) => {
    const { id_user } = req.params;
    const { body } = req;
    let data = usersDatabase;
    const user = data.find( usuario => usuario.id.toString() === id_user);
    const userPosition = data.findIndex( usuario => usuario.id.toString() === id_user);
    usersDatabase[userPosition] = body;
    let response = usersDatabase;
    return response;
}

const deleteUserById = (req) => {
    const { id_user } = req.params;
    let data = usersDatabase;
    const userPosition = data.findIndex( usuario => usuario.id.toString() === id_user);
    usersDatabase.splice(userPosition, 1)
    let response = usersDatabase;
    return response;
}

module.exports = {
    findUsers,
    findUsersById,
    saveUser,
    editUserById,
    deleteUserById
}