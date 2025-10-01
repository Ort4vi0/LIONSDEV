const mongoose = require("mongoose")

const SchemaMovimentacao = new mongoose.Schema (
    {
        IDProduto:{
            type:String,
            unique: true,
            required: true
        },
        Tipo:{
            type:String,
            required: true
        },
        Quantidade:{
            type:Number,
            required: true
        },
        Data:{
            Date:Date.now()
        }
    }
)

const Movimentacao = mongoose.model("Movimentacoes", SchemaMovimentacao)

module.exports = Movimentacao