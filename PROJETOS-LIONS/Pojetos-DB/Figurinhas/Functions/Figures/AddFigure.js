const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils.js");

async function AddFigure(req, res) {
  try {
    const Dados = req.body;
    const NewFigure = await FiguresMGS.create(Dados);
    RetornarSucesso(
      res,
      `Figurinha ${Dados.Tema} Criada com sucesso`,
      200,
      NewFigure
    );
  } catch (error) {
    return RetornarErro(res, "Ocorreu um erro inesperado no servidor.", 500);
  }
}

module.exports = { AddFigure };
