const PetMGS = require("../others/Schemas/SchemaPet");
const { findByIdAndUpdate } = require("../others/Schemas/SchemaPet");
const { RetornoErro, Retorno } = require("../others/utils/utils");

async function EditPet(req, res) {
  try {
    const id = req.params.id;
    const Dadosnovos = req.body;

    const NewPet = await PetMGS.findByIdAndUpdate(id, Dadosnovos, {
      new: true,
      runValidators: true,
    });
    if (!NewPet) {
      return RetornoErro("Não foi possivel localziar o livro", res, 400);
    }
    Retorno("O PET foi editado com sucesso!!", res, 200, NewPet);
  } catch (err) {
    RetornoErro("Não foi possivel editar o PET, erro interno", res);
    console.error(err);
  }
}

module.exports = { EditPet };
