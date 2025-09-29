const mongoose = require("mongoose");
const SchemaLivro = new mongoose.Schema(
  {
    Titulo: {
      type: String,
      required: true,
    },
    Autor: {
      type: String,
      required: true,
    },
    Ano: {
      type: Number,
      required: true,
    },
    Genero: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Livro = mongoose.model("livros", SchemaLivro);

module.exports = Livro;
