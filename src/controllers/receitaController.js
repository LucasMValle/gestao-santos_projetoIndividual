var receitaModel = require("../models/receitaModel");



function cadastrar(req, res) {

    var tipo = req.body.tipoServer;
    var jogador = req.body.jogadorServer;
    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var valor = req.body.valorServer;
    var bonus = req.body.bonusServer;


    if (titulo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    receitaModel.cadastrar(tipo, jogador, titulo, descricao, valor, bonus).then(function(resposta){
        res.status(200).send("receita criada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar(req, res) {
    receitaModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    listar
}