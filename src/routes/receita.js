var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /receita/cadastrar
    receitaController.cadastrar(req, res);
});

router.get("/listar", function (req,res) {
    receitaController.listar(req,res)
})

module.exports = router;

