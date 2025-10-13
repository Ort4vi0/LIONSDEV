const mongoose = require("mongoose");
const SchemaFilme = new mongoose.Schema({
  Titulo:{
    type: String,
    required: true,
    unique: true
  },
  Diretor:{
    type: String,
    required: true,
  },
  Ano:{
    type: Number,
    required: true,
  },
  Genero:{
    type: String,
    required: true,
  },
});

const MovieMGS = mongoose.model("Filmes", SchemaFilme);
module.exports = MovieMGS;
