const express = require("express")

const { AddFigure } = require("../../Functions/Figures/AddFigure.js")
const { EditFigure } = require("../../Functions/Figures/EditFigure.js")
const { ListFigures } = require("../../Functions/Figures/ListFigures.js")
const { DeleteFigure } = require("../../Functions/Figures/DeleteFigure.js")

const { AddUser } = require("../../Functions/Users/AddUser.js")

const route = express.Router()

route.post("/Figures/:user", AddFigure)
route.put("/Figures/:id", EditFigure)
route.get("/Figures", ListFigures)
route.delete("/Figures/:id", DeleteFigure)

route.post("/User", AddUser)

module.exports = route