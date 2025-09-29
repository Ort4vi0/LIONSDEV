require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./Routes/routes.js");

const app = express();
const port = process.env.PORT;

const Geregotango = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Conectado ao MongoDB com sucesso!");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o MongoDB: ${err.message}`);
    });

    app.use(express.json());
    app.use(rotas);

    app.listen(port, () => {
      console.log(`🚀Servidor Iniciado na porta ${port}`);
    });
  } catch (err) {
    console.error("❌Falha na conexão dessa merda. O teu bagulho n iniciou");
    console.error(err.message);
    process.exit(1);
  }
};

Geregotango();
