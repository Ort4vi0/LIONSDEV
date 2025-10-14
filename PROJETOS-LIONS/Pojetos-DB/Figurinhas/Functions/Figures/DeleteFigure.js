const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function DeleteFigure(req, res) {
  try {
    const id = req.params.id;
    const DeleteFigure = await FiguresMGS.findByIdAndDelete(id);
    if (!DeleteFigure) {
      return RetornarErro(res, "Não há nenhuma figura de ID: " + id);
    }
    RetornarSucesso(
      res,
      "A figura " + id + "foi deletada com sucesso",
      200,
      DeleteFigure
    );
  } catch (error) {
    return RetornarErro(res, "Não foi possivel deletar uma figura", 404);
  }
}

module.exports = { DeleteFigure };
