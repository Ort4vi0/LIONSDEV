const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const {
  RetornarErro,
  RetornarSucesso,
} = require("../../others/utils/utils.js");

async function EditFigure(req, res) {
  const id = req.params.id;
  const Dados = req.body;
  const EditFigure = await FiguresMGS.findByIdAndUpdate(id, Dados, {
    new: true,
    runValidators: true,
  });
  if (!EditFigure) {
    return RetornarErro(res, "Não foi possivel editar a figura", 400);
  }
  RetornarSucesso(res, "Figura editada com sucesso", 200);
}

module.exports = { EditFigure };
