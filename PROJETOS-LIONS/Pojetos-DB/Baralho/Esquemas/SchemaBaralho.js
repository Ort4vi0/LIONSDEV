const mongoose = require("mongoose");
const SchemaBaralho = new mongoose.Schema(
  {
    Nome: {
      type: String,
      unique: true
    }
  },
  { timestamps: true }
);

const Baralho = mongoose.model("Baralhos", SchemaBaralho);

module.exports = Baralho;
