const users = require("../data/userDatabase")

const findUsers = () => {
    const data = users.usuarios();
    return data
}
const findUsersById = (id) => {
    let data = users.usuarios();
    const user = data.filter( usuario => {
                    if(usuario.id.toString() === id){
                        return usuario
                    }
                });
    
    // data.forEach( usuario => {
    //     if(usuario.id === id){
    //         console.log("dentre")
    //     }
    // });
    if(user.length > 0){
        return data
    }else {
        return "no existe el usuario"
    }
}

module.exports = {
    findUsers,
    findUsersById
}