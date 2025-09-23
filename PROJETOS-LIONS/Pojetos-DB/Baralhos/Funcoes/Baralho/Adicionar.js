const { LerBaralho, SalvarBaralho, Retornar, RetornarErro } = require("../../Utils/utils.js");

function AdicionarBaralho(req, res) {
    const { Nome } = req.body;

    if (!Nome) {
        return RetornarErro("O nome do baralho é obrigatório.", res);
    }

    try {
        const baralhos = LerBaralho(); 

        const novoBaralho = {
            ID: Date.now(),
            Nome: Nome
        };

        baralhos.push(novoBaralho);
        SalvarBaralho(baralhos);

        return Retornar({ message: "Baralho criado com sucesso!", baralho: novoBaralho }, res);

    } catch (error) {
        console.error("Falha na operação de adicionar baralho:", error.message);
        return RetornarErro("Ocorreu um erro interno ao processar sua solicitação.", res, 500);
    }
}

module.exports = { AdicionarBaralho };