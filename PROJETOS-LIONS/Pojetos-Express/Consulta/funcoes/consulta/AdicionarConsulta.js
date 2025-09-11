const { LerConsultas, SalvarConsultas, VerificarMedicoePaciente} = require("../../utils/utils.js")

function AdicionarConsulta(req,res){
    const {Data, Medico, Paciente, Descricao} = req.body
    if(!Data || !Medico || !Paciente || !Descricao){
        return res.status(400).send("INSIRA O QUE PEDE... SIMPLES NÉ...")
    }
    if(Data.length > 8){
        return res.status(400).send("Data inserida invalida")
    }

    VerificarMedicoePaciente(Medico, Paciente, res)

    const dia = parseInt(Data.substring(0, 2));
    const mes = parseInt(Data.substring(2, 4));
    const ano = parseInt(Data.substring(4, 8));

    const Consulta = {
        ID: Date.now(),
        Data: {
            dia: dia,
            mes: mes,
            ano: ano
        },
        Medico,
        Paciente,
        Descricao
    }

    const Consultas = LerConsultas()
    Consultas.push(Consulta)
    SalvarConsultas(Consultas)

    res.status(200).send("Consulta marcada!! <3")
}

module.exports = {AdicionarConsulta}