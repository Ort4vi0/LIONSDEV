const PetMGS = require("../others/Schemas/SchemaPet.js");
const {RetornoErro } = require("../others/utils/utils.js");

async function ShowPet(req, res) {
  try {
    const Pets = await PetMGS.find(req.query);
    if(Pets.length === 0){
      return RetornoErro("Nenhum PET foi encotrado com os parametros requeridos",res)
    }
    res.status(200).json({PetsEncontrados: Pets.length, Pets})
  } catch (error) {
    RetornoErro("Não foi possivel listar os PETS", res);
    console.error(error);
  }
}

module.exports = { ShowPet };
