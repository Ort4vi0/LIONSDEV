const mongoose = require("mongoose");
const Figures = new mongoose.Schema({
  Numero: {
    type: Number,
    required: true,
  },
  Tema: {
    type: String,
    required: true,
  },
  Quantidade: {
    type: Number,
    required: true,
  },
  Usuario: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

const FiguresMGS = mongoose.model("Figurinhas", Figures);
module.exports = FiguresMGS;
