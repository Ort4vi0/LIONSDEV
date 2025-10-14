const UsersMGS = require("../../others/Schemas/SchemaUser.js");
const { RetornarSucesso } = require("../../others/utils/utils.js");

async function EditUser(req, res) {
  const id = req.params.id;
  const Dados = req.body;

  const EditUser = await UsersMGS.findByIdAndUpdate(id, Dados, {
    new: true,
    runValidators: true,
  });

  const User = await UsersMGS.findById(id);

  RetornarSucesso(
    res,
    `O usuario ${User.Nome}:(${id}) foi editado com sucesso`,
    200,
    EditUser
  );
}

module.exports = { EditUser };
