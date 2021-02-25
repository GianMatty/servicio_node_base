
const findUsers = (req, res) => {
    return res.send("DESDE LA ARCHIVO CONTROLLER - traer usuarios");
}
const findUserId = (req, res) => {
    return res.send("DESDE LA ARCHIVO CONTROLLER - traer usuarios segun id");
}

module.exports = {
    findUsers,
    findUserId
}