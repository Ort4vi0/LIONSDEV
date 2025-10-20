const express = require("express");
const { AddUser } = require("../Functions/User/AddUser");
const { RemoveUser } = require("../Functions/User/RemoveUser");
const { loginUser } = require("../Functions/Login/LoginUser");
const { AuthMiddleware } = require("../Middleware/auth-middleware");
const { HelloUser } = require("../Functions/Login/GetUser");

const route = express.Router();

route.post("/Cadastro", AddUser)
route.delete("/Cadastro/:id", RemoveUser)
route.post("/login", loginUser)
route.get("/profile", AuthMiddleware, HelloUser)

module.exports = route;