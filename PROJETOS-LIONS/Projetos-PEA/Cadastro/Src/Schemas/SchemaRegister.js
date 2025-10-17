const mongoose = require("mongoose");
const SchemaRegister = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Senha: {
        type: String,
        required: true
    },

})

const RegisterUserMGS = mongoose.model("Register", SchemaRegister)

module.exports = RegisterUserMGS