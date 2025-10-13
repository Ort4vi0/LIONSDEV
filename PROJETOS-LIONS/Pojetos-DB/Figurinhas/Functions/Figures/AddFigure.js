const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils.js");

async function AddFigure(req, res) {
  try {
    const user = req.params.user
    const Dados = req.body;
    Dados.Usuario = user
    const NewFigure = await FiguresMGS.create(Dados);
    RetornarSucesso(
      res,
      `Figurinha ${Dados.Tema} Criada com sucesso`,
      200,
      NewFigure
    );
  } catch (error) {
    console.log(error)
    if(error.code === 11000){
      return RetornarErro(res, "Já existe essa figurinha cadastrada", 400)
    }
    return RetornarErro(res, "Ocorreu um erro inesperado no servidor.", 500);
  }
}

module.exports = { AddFigure };
