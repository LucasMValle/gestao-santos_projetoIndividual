var database = require("../database/config")

function cadastrar(tipo, jogador, titulo, descricao, valor, bonus) {
    var instrucao = `
        INSERT INTO receitas (tipo, jogador, titulo_receita, descricao, valor, bonus) VALUES ('${tipo}', ${jogador}, '${titulo}', '${descricao}', ${valor}, ${bonus});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
        SELECT tipo, titulo_receita, valor FROM receitas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};