const express = require('express')
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
        res.send("DESDE LA ARCHIVO ROUTER - traer usuarios")
    })
    .get("/:id_user", (req, res) => {
        res.send("DESDE LA ARCHIVO ROUTER - traer usuario segun id")
    })

module.exports = userRouter;