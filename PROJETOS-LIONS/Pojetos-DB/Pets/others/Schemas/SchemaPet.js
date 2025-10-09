const mongoose = require("mongoose");
const SchemaPet = new mongoose.Schema({
  Nome: {
    type: String,
    required: true,
  },
  Especie: {
    type: String,
    required: true,
  },
  Idade: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    require: true,
  },
});

const PetMGS = mongoose.model("Pets", SchemaPet);
module.exports = PetMGS;
