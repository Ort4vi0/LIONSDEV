require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const route = require("./others/routes/routes.js")

const app = express();
const port = process.env.PORT;

const ServerMain = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("✅Conectado com SUCESSO ao DB");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o DB ${err.message}`);
    });

    app.use(express.json());
    app.use(route);

    app.listen(port, () => {
      console.log(`🚀Servidor inciado com sucesso na porta ${port}`);
    });
  } catch (error) {
    console.error("❌Falha na conexão, servidor nao foi iniciado");
    console.error(error.message);
    process.exit(1);
  }
};

ServerMain();
