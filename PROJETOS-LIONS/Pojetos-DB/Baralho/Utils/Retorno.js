function RetornoErro(mensagem, res, status) {
    if (!status) {
      status = 400;
    }
    const filtrarerrro = mensagem.split(" ");
    if (filtrarerrro[9] == "E11000") {
      return res
        .status(status)
        .json({ erro: "Você está tentando cadastrar algo ja exisitente!!" });
    }
    return res.status(status).json({ erro: mensagem });
  }
  
  function Retorno(mensagem, res, status) {
    if (!status) {
      status = 200;
    }
    return res.status(status).json({ mensagem });
  }
  
  function RetornoArray(mensagem, res, status) {
    return res.status(status).json(mensagem);
  }
  
  module.exports = {
    RetornoErro,
    RetornoArray,
    Retorno,
  };
  