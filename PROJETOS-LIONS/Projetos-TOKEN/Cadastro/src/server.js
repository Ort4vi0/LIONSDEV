import dotenv from 'dotenv';
import app from './app.js';
import connect from './config/db.js';

dotenv.config({path: '.env'});

const PORT = process.env.PORT;
const DB = process.env.DB;

(async () => {
  try {
    await connect(DB);
    app.listen(PORT, () => console.log(`API ouvindo em http://localhost:${PORT}`));
  } catch (error) {
    console.error('Erro ao conectar no banco ou iniciar o servidor', error);
    process.exit(1);
  }
})();
