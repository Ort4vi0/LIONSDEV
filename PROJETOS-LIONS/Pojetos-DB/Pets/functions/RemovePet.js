const PetMGS = require("../others/Schemas/SchemaPet.js");
const { Retorno, RetornoErro } = require("../others/utils/utils");

async function RemovePet(req, res) {
  try {
    const id = req.params.id;
    const DeletePet = await PetMGS.findByIdAndDelete(id);
    if (!DeletePet) {
      return RetornoErro(
        "Não foi possivel localizar nenhum PET com o ID" + id,
        res
      );
    }
    Retorno(`Pet ${id} removido com sucesso!!`, res, 200, DeletePet);
  } catch (err) {
    RetornoErro("Não foi possivel edtar o PET devido a um erro interno")
    console.error(err)
  }
}

module.exports = { RemovePet };
