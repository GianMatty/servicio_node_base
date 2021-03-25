const express = require('express')
const userRouter = express.Router();
const userController = require("../controllers/userController")

userRouter.get("/", userController.showUsuarios)
          .get("/:id_user", userController.showUsuarioById)
          .post("/", userController.saveUsuario)
          .put("/:id_user", userController.editUsuarioById)
          .delete("/:id_user", userController.deleteUsuarioById)

module.exports = userRouter;