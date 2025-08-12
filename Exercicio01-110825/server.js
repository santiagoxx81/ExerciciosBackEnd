const express = require('express');
const cors = require('cors');
require('dotenv').config();

const jogosRoutes = require('./routes/jogos');

const app = express();
app.use(express.json());
app.use(cors({
    origin:'*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/jogos', jogosRoutes);
const PORT = process.env.APP_PORT||3008;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));
