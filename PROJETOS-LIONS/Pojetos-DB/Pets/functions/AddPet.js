const PetMGS = require("../others/Schemas/SchemaPet.js");
const { Retorno, RetornoErro } = require("../others/utils/utils.js");

async function AddPet(req, res) {
  try {
    const Dados = req.body;
    const AddPet = new PetMGS(Dados);
    const SavePet = await AddPet.save();
    Retorno("Seu pet foi salvo com sucesso", res, 201, SavePet);
  } catch (err) {
    RetornoErro("Não foi possivel salvar o PET", res);
    console.error(err);
  }
}

module.exports = { AddPet };
