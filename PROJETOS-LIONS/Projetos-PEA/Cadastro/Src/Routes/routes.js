const express = require("express");
const { AddUser } = require("../Functions/AddUser");
const { RemoveUser } = require("../Functions/RemoveUser");

const route = express.Router();

route.post("/Cadastro", AddUser)
route.delete("/Cadastro/:id", RemoveUser)

module.exports = route;