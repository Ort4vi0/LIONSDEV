function RetornoErro(mensagem, res){
    return res.status(400).json({mensagem})
}

function Retorno(mensagem, res){
    return res.status(200).json({mensagem})
}

module.exports = {
    RetornoErro,
    Retorno
};