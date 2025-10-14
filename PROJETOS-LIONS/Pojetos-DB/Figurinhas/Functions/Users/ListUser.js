const UsersMGS = require("../../others/Schemas/SchemaUser.js");
const {
  RetornarSucesso,
  RetornarErro,
} = require("../../others/utils/utils.js");

async function ListUser(req, res) {
  try {
    const Users = await UsersMGS.find(req.query);
    if (Users.length === 0) {
      return RetornarErro(
        res,
        "Não existem usuarios cadastrados com os parametros desejados",
        404
      );
    }
    RetornarSucesso(res, Users, 200);
  } catch (error) {
    console.error(error);
    return RetornarErro(res, "Erro interno");
  }
}

module.exports = { ListUser };
