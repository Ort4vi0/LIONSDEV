const RegisterUserMGS = require('../../Schemas/SchemaRegister')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function loginUser(req, res){
  const { Email, Senha } = req.body;

  const user = await RegisterUserMGS.findOne({ Email });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const validPassword = await bcrypt.compare(Senha, user.Senha);
  if (!validPassword) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ userId: user._id }, 'acess token', { expiresIn: '1h' });

  res.json({ message: 'Login realizado com sucesso!', token });
}

module.exports = {loginUser}