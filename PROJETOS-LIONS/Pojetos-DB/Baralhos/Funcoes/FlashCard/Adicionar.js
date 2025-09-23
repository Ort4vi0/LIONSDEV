const { LerFlashCard, SalvarFlashCard, Retornar, RetornarErro, LerBaralho } = require("../../Utils/utils.js");

function AdicionarFlashCard(req, res) {
    const {Pergunta, Resposta } = req.body;
    const id = Number(req.params.id)
    
    if (!id || !Pergunta || !Resposta) {
        return RetornarErro("É obrigatório fornecer o ID do Baralho, a Pergunta e a Resposta.", res);
    }

    try {
        const flashCards = LerFlashCard();
        const baralhos = LerBaralho();

        const baralhoExistente = baralhos.find(baralho => baralho.ID === id);
        
        if (!baralhoExistente) {
            return RetornarErro("Baralho não encontrado!! Verifique o IDBaralho fornecido.", res);
        }

        const VerificarDuplicata = baralhos.filter(baralho => baralho.Pergunta === Pergunta)
        if(VerificarDuplicata !== '[]'){
            return RetornarErro("Já existe um flashcard com essa pergunta", res)
        }
        
        const novoFlashCard = {
            ID: Date.now(),
            IDBaralho: id,
            Pergunta: Pergunta,
            Resposta: Resposta
        };

        flashCards.push(novoFlashCard);

        SalvarFlashCard(flashCards);
        
        return Retornar({ message: "FlashCard criado com sucesso!", flashcard: novoFlashCard }, res);

    } catch (error) {
        console.error("Falha na operação de adicionar um flashcard:", error.message);
        return RetornarErro("Ocorreu um erro interno ao processar a sua solicitação.", res, 500);
    }
}

module.exports = { AdicionarFlashCard };