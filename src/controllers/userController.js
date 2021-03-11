
const mostrar = (req, res) => {
    res.send("mostrar")
}

const buscar = (req, res) => {
    const id = req.params;
    console.log(id)
    res.send("buscar")
}
const guardar = (req, res) => {
    const data = req.body;
    console.log(data)
    res.send("guardar")
}
const editar = (req, res) => {
    res.send("editar")
}
const eliminar = (req, res) => {
    res.send("eliminar")
}

module.exports = {
    mostrar,
    buscar,
    guardar,
    editar,
    eliminar
}