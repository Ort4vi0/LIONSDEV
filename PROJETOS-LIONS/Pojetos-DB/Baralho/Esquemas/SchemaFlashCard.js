const mongoose = require("mongoose");
const SchemaFlashCard = new mongoose.Schema(
  {
    IDBaralho: {
      type: String,
      ref: "Baralho",
      required: true,
      immutable: true
    },
    Pergunta: {
      type: String,
      required: true,
      unique: true
    },
    Resposta: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FlashCard = mongoose.model("FlashCard", SchemaFlashCard);

module.exports = FlashCard;
