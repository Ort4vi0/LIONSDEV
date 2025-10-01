const mongoose = require("mongoose")

const SchemaProduto = new mongoose.Schema (
    {
        Nome:{
            type:String,
            unique: [true, "Esse produto já existe no sistema"],
            required: true
        },
        Quantidade:{
            type:Number,
            required: true
        }
    }
)

const Produto = mongoose.model("Produto", SchemaProduto)

module.exports = Produto