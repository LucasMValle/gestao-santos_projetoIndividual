var plantelModel = require("../models/plantelModel");



function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var idade = req.body.idadeServer;
    var nascimento = req.body.nascimentoServer;
    var tipo = req.body.tipoServer;
    var inicio = req.body.inicioServer;
    var fim = req.body.fimServer;
    var salario = req.body.salarioServer;
    var clausulas = req.body.clausulasServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    plantelModel.cadastrar(nome, idade, nascimento, tipo, inicio, fim, salario, clausulas).then(function(resposta){
        res.status(200).send("Jogador criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
        console.log("\n--- ERRO REAL NO BANCO DE DADOS ---");
        console.log(erro); 
        console.log("-----------------------------------\n");
    })
}

function listar(req, res) {
    plantelModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function exibir(req, res) {

    var idJogador = req.params.id_jogador;

    plantelModel.exibir(idJogador).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    listar,
    exibir
}