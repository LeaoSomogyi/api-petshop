const { response } = require('express');

const roteador = require('express').Router();
const Tabela = require('./TabelaFornecedor');

roteador.use('/', async (_, resposta) => {
    const resultados = await Tabela.listar();
    resposta.send(JSON.stringify(resultados));
});

module.exports = roteador;