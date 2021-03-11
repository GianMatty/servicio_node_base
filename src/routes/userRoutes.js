const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router();

userRouter.get('/', userController.mostrar)
          .get('/:id', userController.buscar)
          .post('/', userController.guardar)
          .put('/:id', userController.editar)
          .delete('/:id', userController.eliminar)


module.exports = userRouter;