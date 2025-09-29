const Baralho = require("../../Esquemas/SchemaBaralho.js");
const FlashCard = require("../../Esquemas/SchemaFlashCard.js");
const { RetornoErro, Retorno } = require("../../Utils/Retorno.js");

async function AdicionarFlashCard(req, res) {
  try {
    const { IDBaralho, Pergunta, Resposta } = req.body;
    if (!IDBaralho || !Pergunta || !Resposta) {
      return RetornoErro(
        "Os Campos IDBaralho, Pergunta e Resposta são obrigatorios",
        res
      );
    }

    const FindBaralho = await Baralho.findById(IDBaralho);
    if (!FindBaralho || FindBaralho == ' ') {
      return RetornoErro("Baralho nao encontrado no sistema", res, 400);
    }

    const FlashCardExistente = await FlashCard.findOne({ Pergunta: Pergunta });
    if (FlashCardExistente) {
      return RetornoErro(
        `Um FlashCard com a pergunta "${Pergunta}" já existe.`,
        res,
        409
      ); // 409 é o código para "Conflito"
    }

    const FlashCardNova = new FlashCard({
      IDBaralho: IDBaralho,
      Pergunta: Pergunta,
      Resposta: Resposta,
    });

    const SalvarFlahsCard = await FlashCardNova.save();
    Retorno("O Flash Card foi criado!!", res, 200, SalvarFlahsCard);
  } catch (error) {
    console.error("Erro ao Salvar o Flashcard");
    RetornoErro(
      `Erro ao salvar o Flashcard no banco de dados: ${error.message}`,
      res,
      500
    );
  }
}

module.exports = {AdicionarFlashCard}
