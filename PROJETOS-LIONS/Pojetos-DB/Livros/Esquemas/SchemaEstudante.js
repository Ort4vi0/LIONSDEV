const mongoose = require("mongoose");

const SchemaEstudante = new mongoose.Schema({
    Nome: {
      type: String,
      required: true,
    },
    Matricula: {
      type: String,
      required: true,
      unique: true
    },
    Curso: {
      type: String,
      required: true
    },
    Ano: {
      type: Number,
      required: true
    },
}, { timestamps: true });

const Estudante = mongoose.model("estudantes", SchemaEstudante);

module.exports = Estudante;