const fs = require('fs');
const path = require('path'); // Boa prática para manipular caminhos de arquivos

// Caminhos para os arquivos de "banco de dados"
// Usar path.join garante que funcione em qualquer sistema operacional (Windows, Linux, Mac)
const DB_DIR = path.join(__dirname, 'db'); // Assume que a pasta 'db' está no mesmo nível
const DBFLASHCARD = path.join(DB_DIR, 'FlashCard.json');
const DBBARALHO = path.join(DB_DIR, 'Baralho.json');


/**
 * Salva os dados em um arquivo JSON. Lança um erro se a operação falhar.
 * @param {string} PATH O caminho completo para o arquivo.
 * @param {object} dados O objeto/array a ser salvo.
 */
function SalvarDados(PATH, dados) {
    try {
        // Garante que o diretório 'db' exista antes de tentar salvar
        if (!fs.existsSync(DB_DIR)) {
            fs.mkdirSync(DB_DIR);
        }
        const dadosJson = JSON.stringify(dados, null, 2); // O 'null, 2' formata o JSON para ser legível
        fs.writeFileSync(PATH, dadosJson);
    } catch (error) {
        console.error(`Erro CRÍTICO ao salvar dados em ${PATH}:`, error);
        // Lança o erro para que a função que chamou (ex: AdicionarBaralho) saiba que a operação falhou.
        throw new Error('Falha ao salvar os dados.');
    }
}

/**
 * Lê e analisa dados de um arquivo JSON.
 * @param {string} PATH O caminho completo para o arquivo.
 * @returns {Array} Os dados do arquivo.
 * @throws {Error} Lança um erro se o arquivo JSON estiver corrompido.
 */
function LerDados(PATH) {
    // Caso 1: O arquivo não existe. É seguro criar um novo e retornar [].
    if (!fs.existsSync(PATH)) {
        return [];
    }

    const dadosJson = fs.readFileSync(PATH, 'utf-8');

    // Caso 2: O arquivo existe, mas está vazio. É seguro retornar [].
    if (!dadosJson.trim()) {
        return [];
    }
    
    // Caso 3: O arquivo tem conteúdo. Tentamos analisá-lo.
    try {
        return JSON.parse(dadosJson);
    } catch (error) {
        // Se a análise falhar, o JSON está CORROMPIDO.
        // Lançamos um erro para PROTEGER os dados existentes de serem sobrescritos.
        console.error(`Erro CRÍTICO: O arquivo ${PATH} está corrompido.`, error);
        throw new Error('O arquivo de dados está corrompido e não pôde ser lido.');
    }
}


// --- Funções Específicas ---

function SalvarFlashCard(dados) {
    SalvarDados(DBFLASHCARD, dados);
}

function LerFlashCard() {
    return LerDados(DBFLASHCARD);
}

function SalvarBaralho(dados) {
    SalvarDados(DBBARALHO, dados);
}

// FUNÇÃO CORRIGIDA
function LerBaralho() {
    return LerDados(DBBARALHO);
}

// --- Funções de Resposta HTTP ---

function Retornar(msg, res) {
    return res.status(200).json(msg); // Melhor usar .json se estiver enviando objetos/arrays
}

function RetornarErro(msg, res, statusCode = 400) {
    // Permite customizar o status code, como 500 para erro interno
    return res.status(statusCode).json({ error: msg });
}

module.exports = {
    SalvarFlashCard,
    LerFlashCard,
    SalvarBaralho,
    LerBaralho,
    Retornar,
    RetornarErro
};