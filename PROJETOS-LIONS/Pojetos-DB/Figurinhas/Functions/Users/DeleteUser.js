const FiguresMGS = require("../../others/Schemas/SchemaFig.js");
const UsersMGS = require("../../others/Schemas/SchemaUser.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function DeleteUser(req, res) {
  try {
    const id = req.params.id;

    const DeleteUser = await UsersMGS.findByIdAndDelete(id);
    const DeleteFiguresForUser = await FiguresMGS.deleteMany({ Usuario: id });

    RetornarSucesso(
      res,
      "Usuario foi deletado junto de suas figurinhas!",
      200,
      DeleteUser,
      DeleteFiguresForUser
    );
  } catch (error) {
    console.error(error);
    return RetornarErro(res, "Erro interno");
  }
}

module.exports = { DeleteUser };
