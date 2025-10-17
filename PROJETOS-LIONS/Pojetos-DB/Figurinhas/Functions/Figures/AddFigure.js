const { default: mongoose } = require("mongoose");
const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const UsersMGS = require("../../others/Schemas/SchemaUser.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function AddFigure(req, res) {
  try {
    const user = req.params.user;
    const Dados = req.body;
    Dados.Usuario = user;
    if (!mongoose.Types.ObjectId.isValid(user)) {
      RetornarErro(
        res,
        `Não foi possivel criar uma figurinha, pois o usuario é invalido.`
      );
      throw new Error("ID de usuário inválido.");
    }
    const NewFigure = await FiguresMGS.create(Dados);

    await UsersMGS.updateOne(
      { _id: user },
      { $inc: { QNTF: Dados.Quantidade } }
    );
    
    RetornarSucesso(
      res,
      `Figurinha ${Dados.Tema} Criada com sucesso`,
      200,
      NewFigure
    );
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return RetornarErro(res, "Já existe essa figurinha cadastrada", 500,);
    }
    return RetornarErro(res, "Ocorreu um erro inesperado no servidor.", 500);
  }
}

module.exports = { AddFigure };
