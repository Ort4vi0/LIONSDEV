const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  Nome:{
    type: String,
    required: true
  },
  QNTF:{
    type: Number,
    required: true
  }
});

const UsersMGS = mongoose.model("Usuarios", Users);
module.exports = UsersMGS;
