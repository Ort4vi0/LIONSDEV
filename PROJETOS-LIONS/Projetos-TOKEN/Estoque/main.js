
import express from "express";
import dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";

import rotas from "./Src/Routes/routes.js";

const app = express();
const PORT = process.env.PORT;
const DBLINK = process.env.DBLINK;


const MainServer = async () => {
    try{
        await mongoose.connect(DBLINK)
        console.log("✅ Conectado ao MongoDB com sucesso!");
        mongoose.connection.on("error", (err) => {
            console.error(`Erro de conexão com o MongoDB: ${err.message}`);
        });

        app.use(express.json());
        app.use(rotas);

        app.listen(PORT, () => {
            console.log(`🚀 Servidor iniciado na porta ${PORT}`);
        });
    } catch (err) {
        console.error(
            "❌ Falha ao conectar ao MongoDB. O servidor não foi iniciado."
        );
        console.error(err.message);
        process.exit(1);
    }

};

MainServer();




