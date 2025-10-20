const express = require("express");
const { AddUser } = require("../Functions/AddUser");
const { RemoveUser } = require("../Functions/RemoveUser");
const { loginUser } = require("../Functions/LoginUser");

const route = express.Router();

route.post("/Cadastro", AddUser)
route.delete("/Cadastro/:id", RemoveUser)
route.post("/login", loginUser)
route.get("/profile",authMiddleware, HelloUser )

module.exports = route;