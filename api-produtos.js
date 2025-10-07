// api-produtos.js

const express = require('express');
const app = express();
const PORT = 3002;

// Middleware para JSON
app.use(express.json());

// Array para simular banco de dados
let produtos = [
    { id: 1, nome: 'Notebook', preco: 3500.00, categoria: 'Eletrônicos' },
    { id: 2, nome: 'Cafeteira', preco: 200.00, categoria: 'Eletrodomésticos' }
];

// GET - Listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// GET - Buscar produto por ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ erro: 'Produto não encontrado' });
    }
});

// POST - Criar novo produto
app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;

    // Validação básica
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }

    const novoProduto = {
        id: produtos.length ? produtos[produtos.length - 1].id + 1 : 1,
        nome,
        preco,
        categoria
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT - Atualizar produto
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    produtos[index] = { ...produtos[index], ...req.body };
    res.json(produtos[index]);
});

// DELETE - Remover produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    produtos.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
