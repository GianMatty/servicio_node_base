const axios = require('axios')

const findUser = async () => {
    const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json();
    console.log("aqui es: ", status)
    return data
}

const findUserById = () => {
    return 'por id'
}

module.exports = {
    findUser,
    findUserById
}