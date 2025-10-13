const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  Nome:{
    type: Number,
    required: true
  },
  QuantidadeFigurinhas:{
    type: Number,
    required: true
  }
});

const UsersMGS = mongoose.model("Usuarios", Users);
module.exports = UsersMGS;
