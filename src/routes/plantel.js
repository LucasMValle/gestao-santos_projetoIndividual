var express = require("express");
var router = express.Router();

var plantelController = require("../controllers/plantelController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /plantel/cadastrar
    plantelController.cadastrar(req, res);
});

router.get("/listar", function (req,res) {
    plantelController.listar(req,res)
});

router.get("/exibir/:id_jogador", function (req, res) {
    plantelController.exibir(req, res);
});


module.exports = router;