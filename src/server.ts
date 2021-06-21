import { app, PORT } from './config/app';

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🔥`);
});