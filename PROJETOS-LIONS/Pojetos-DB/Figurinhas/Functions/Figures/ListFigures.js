const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function ListFigures(req, res) {
  try {
    const Figures = await FiguresMGS.find(req.query);
    if (Figures.length === 0) {
      return RetornarErro(
        res,
        "Não existe nenhuma figurinha cadastrada ou com esses parametros",
        404
      );
    }
    RetornarSucesso(res, Figures, 200);
  } catch (error) {
    return RetornarErro(res, "Erro interno no servidor", 400);
  }
}

module.exports = { ListFigures };
