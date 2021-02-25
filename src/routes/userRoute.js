const express = require('express')
const userRouter = express.Router();
const userController = require("../controllers/userController")

userRouter.get("/", userController.findUsers)
    .get("/:id_user", userController.findUserId)

module.exports = userRouter;