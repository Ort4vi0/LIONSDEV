const UsersMGS = require("../../others/Schemas/SchemaUser.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function AddUser(req, res) {
  try {
    const Dados = req.body;
    const NewUser = await UsersMGS.create(Dados);
    RetornarSucesso(
      res,
      `Usuário ${Dados.Nome} Adicionado com sucesso`,
      200,
      NewUser
    );
  } catch (error) {
    console.log(error);
    return RetornarErro(
      res,
      "Não foi possivel criar um usuario devido a um erro interno do servidor"
    );
  }
}

module.exports = { AddUser };
