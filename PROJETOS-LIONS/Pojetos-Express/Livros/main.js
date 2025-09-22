require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const mongoose = require('mongoose');
const rotas = require('./funcoes/rotas.js');

const app = express();
const port = process.env.PORT || 7777;

// Função assíncrona para iniciar a aplicação
const startServer = async () => {
    try {
        // 1. Conecta ao MongoDB primeiro
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Conectado ao MongoDB com sucesso!");

        // Middleware para erros de conexão após a conexão inicial
        mongoose.connection.on('error', (err) => {
            console.error(`Erro de conexão com o MongoDB: ${err.message}`);
        });

        // 2. Configura o Express APÓS a conexão com o banco ser bem-sucedida
        app.use(express.json());
        app.use(rotas);

        // 3. Inicia o servidor
        app.listen(port, () => {
            console.log(`🚀 Servidor iniciado na porta ${port}`);
        });

    } catch (err) {
        console.error("❌ Falha ao conectar ao MongoDB. O servidor não foi iniciado.");
        console.error(err.message);
        process.exit(1); // Encerra o processo se não conseguir conectar ao banco
    }
};

// Chama a função para iniciar tudo
startServer();