// app-express.js

// TODO: Importe o Express
const express = require('express');

// TODO: Crie a aplicação Express
const app = express();

// TODO: Defina a porta
const PORT = 3001;

// TODO: Rota GET para página inicial
app.get('/', (req, res) => {
    // TODO: Responda com JSON contendo mensagem de boas-vindas
    res.json({
        mensagem: 'Bem-vindo à API!',
        timestamp: new Date().toISOString()
    });
});

// TODO: Rota GET para /sobre
app.get('/sobre', (req, res) => {
    // TODO: Responda com JSON contendo informações sobre a API
    res.json({
        nome: 'Minha API Express',
        versao: '1.0.0',
        descricao: 'Uma API simples usando Express.js',
        autor: 'Julia'
    });
});

// TODO: Rota GET com parâmetro para /usuario/:nome
app.get('/usuario/:nome', (req, res) => {
    // TODO: Capture o parâmetro nome
    const nome = req.params.nome;
    
    // TODO: Responda com JSON personalizado
    res.json({
        mensagem: `Olá, ${nome}! Seja bem-vindo(a)!`,
        usuario: nome,
        timestamp: new Date().toISOString()
    });
});

// TODO: Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});