/**
 * Função para padronizar e enviar respostas de sucesso.
 * @param {object} res - O objeto de resposta do Express.
 * @param {object|string} data - Os dados a serem enviados no corpo da resposta.
 * @param {number} [statusCode=200] - O código de status HTTP (opcional, padrão 200).
 */
const RetornarSucesso = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data: data,
  });
};

/**
 * Função para padronizar e enviar respostas de erro.
 * @param {object} res - O objeto de resposta do Express.
 * @param {string} message - A mensagem de erro.
 * @param {number} [statusCode=500] - O código de status HTTP (opcional, padrão 500).
 */
const RetornarErro = (res, message, statusCode = 500) => {
  if(message )
  return res.status(statusCode).json({
    success: false,
    error: message,
  });
};

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
  RetornarSucesso,
  RetornarErro,
};