const fs = require('fs');

function SalvarDados(PATH, dados) {
    try {
        const dadosJson = JSON.stringify(dados, null, 2);
        fs.writeFileSync(PATH, dadosJson);
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
}

function LerDados(PATH) {
    if (!fs.existsSync(PATH)) {
        console.log('Arquivo de dados não encontrado. Criando um novo...');
        return [];
    }
    try {
        const dadosJson = fs.readFileSync(PATH, 'utf-8');
        if (!dadosJson.trim()) {
            return [];
        }
        return JSON.parse(dadosJson);
    } catch (error) {
        console.error('Erro ao ler ou analisar o arquivo JSON:', error);
        return [];
    }
}

const DBPRODUTOS = './db/Produtos.json';

function SalvarProdutos(dados) {
    SalvarDados(DBPRODUTOS, dados);
}

function LerProdutos() {
    return LerDados(DBPRODUTOS);
}

function Retornar(msg, res) {
    return res.status(200).send(msg);
}

function RetornarErro(msg, res) {
    return res.status(400).send(msg);
}

module.exports = {
    SalvarProdutos,
    LerProdutos,
    Retornar,
    RetornarErro
};
