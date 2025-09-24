const mongoose = require("mongoose");
const SchemaAluguel = new mongoose.Schema(
  {
    Livro: {
      type: String,
      required: true,
    },
    Estudante: {
      type: String,
      required: true,
    },
    DataAluguel: {
      type: String,
      required: true,
    },
    DataDevolucao: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Aluguel = mongoose.model("alugueis", SchemaAluguel);

module.exports = Aluguel;
